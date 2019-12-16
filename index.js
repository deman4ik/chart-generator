const ChartjsNode = require('chartjs-node');

var chartNode = new ChartjsNode(1200, 700);

const { positions, candles } = require('./data')

const ChartTitle = positions["name"]

const chartData = [];
const pointData = [];

dataSet(candles);
setPoints(positions["robotPositions"]);

const months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
}

const typeActions = {
    'short': 'Short',
    'long': 'Long',
    'closeShort': 'Close Short',
    'closeLong': 'Close Long'
}

chartNode.on('beforeDraw', function (Chart) {
    'use strict';

    Chart = Chart && Chart.hasOwnProperty('default') ? Chart['default'] : Chart;

    const helpers = Chart.helpers;
	const defaultConfig = {
		position: 'left',
		ticks: {
			callback: Chart.Ticks.formatters.linear
		}
    };
    
    Chart.plugins.register({
		beforeDraw: function(chartInstance) {
			const ctx = chartInstance.chart.ctx;

		  	ctx.fillStyle = "#242B4A";
		  	ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
		}
    });
    
    const FinancialLinearScale = Chart.scaleService.getScaleConstructor('linear').extend({
		_parseValue: function (value) {
            let start, end, min, max;

			if (typeof value.c !== 'undefined') {
				start = +this.getRightValue(value.l);
				end   = +this.getRightValue(value.h);
				min   = Math.min(start, end);
				max   = Math.max(start, end);
			} else {
				value = +this.getRightValue(value.y);
				start = undefined;
				end   = value;
				min   = value;
				max   = value;
			}

			return {
				min: min,
				max: max,
				start: start,
				end: end
			};
		},
		determineDataLimits: function() {
			const me    = this;
			const chart = me.chart;
			const data  = chart.data;
			const datasets = data.datasets;
            const isHorizontal = me.isHorizontal();

			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			me.min = null;
			me.max = null;

			helpers.each(datasets, function(dataset, datasetIndex) {
				const meta = chart.getDatasetMeta(datasetIndex);
				
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
					helpers.each(dataset.data, function(rawValue, index) {
                        const value = me._parseValue(rawValue);

						if (isNaN(value.min) || isNaN(value.max) || meta.data[index].hidden) return;
						if (me.min === null || value.min < me.min) me.min = value.min;
						if (me.max === null || me.max < value.max) me.max = value.max;
					});
				}
			});

			const space = (me.max - me.min) * 0.2;

			me.min -= space;
            me.max += space;

			this.handleTickRangeOptions();
		}
    });
    
    Chart.scaleService.registerScaleType('financialLinear', FinancialLinearScale, defaultConfig);

    Chart.defaults.financial = {
		label: '',
		hover: { mode: 'label' },
		scales: {
			xAxes: [{
				type: 'time',
				distribution: 'series',
				offset: true,
				ticks: {
					major: {
						enabled: true,
						fontStyle: 'bold'
                    },
                    fontSize: 18,
                    fontStyle: 'bold',
                    fontColor: '#ffffff',
					source: 'data',
					maxRotation: 0,
					autoSkip: true,
					autoSkipPadding: 25,
					sampleSize: 100
				}
			}],
            yAxes: [{
                type: 'financialLinear',
                distribution: 'series',
				offset: true,
                ticks: {
					major: {
						enabled: true,
						fontStyle: 'bold'
                    },
                    fontSize: 18,
                    fontStyle: 'bold',
                    fontColor: '#ffffff',
					source: 'data',
					maxRotation: 0,
					autoSkip: true,
					autoSkipPadding: 25,
					sampleSize: 100
				}
            }]
		}
    };
    
    const FinancialController = Chart.controllers.bar.extend({
		dataElementType: Chart.elements.Financial,

		/**
		 * @private
		 */
		_updateElementGeometry: function(element, index, reset, options) {
			const me    = this;
			const model = element._model;
			

            const vscale = me._getValueScale();
            const base   = vscale.getBasePixel();
			const ruler  = me._ruler || me.getRuler();
            const horizontal = vscale.isHorizontal();
			const vpixels    = me.calculateBarValuePixels(me.index, index, options);
			const ipixels    = me.calculateBarIndexPixels(me.index, index, ruler, options);
			const chart      = me.chart;
			const datasets   = chart.data.datasets;
            const indexData = datasets[me.index].data[index];

			model.horizontal = horizontal;
			model.base = reset ? base : vpixels.base;
			model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
			model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
			model.height = horizontal ? ipixels.size : undefined;
			model.width  = horizontal ? undefined : ipixels.size;
			model.candleOpen  = vscale.getPixelForValue(Number(indexData.o));
			model.candleHigh  = vscale.getPixelForValue(Number(indexData.h));
			model.candleLow   = vscale.getPixelForValue(Number(indexData.l));
			model.candleClose = vscale.getPixelForValue(Number(indexData.c));
			model.t_data = me._data[index].t
		},

		draw: function() {
			const ctx     = this.chart.chart.ctx;
			const elems   = this.getMeta().data;
			const dataset = this.getDataset();

			Chart.canvasHelpers.clipArea(ctx, this.chart.chartArea);

			for (let i = 0; i < elems.length; i++) {
                const d = dataset.data[i].o;

				if (d !== null && d !== undefined && !isNaN(d)) elems[i].draw();
			}

			Chart.canvasHelpers.unclipArea(ctx);
		}
    });
    
    const globalOpts = Chart.defaults.global;

	globalOpts.elements.financial = {
		color: {
			up: '#1CA46B',
			down: '#CD3E60',
			unchanged: '#999'
		}
    };
    
    /**
	 * Helper function to get the bounds of the candle
	 * @private
	 * @param bar {Chart.Element.financial} the bar
	 * @return {Bounds} bounds of the bar
	 */
	function getBarBounds(candle) {
		const vm = candle._view;
		const halfWidth = vm.width / 2;

		let x1 = vm.x - halfWidth,
			x2 = vm.x + halfWidth,
			y1 = vm.candleHigh,
			y2 = vm.candleLow;

		return {
			left: x1,
			top: y1,
			right: x2,
			bottom: y2
		};
    }
    
    const FinancialElement = Chart.Element.extend({ inRange: () => {} });

	const helpers$3    = Chart.helpers;
	const globalOpts$1 = Chart.defaults.global;

	globalOpts$1.elements.candlestick = helpers$3.merge({}, [globalOpts$1.elements.financial, {
		borderColor: globalOpts$1.elements.financial.color.unchanged,
		borderWidth: 2,
	}]);

	const CandlestickElement = FinancialElement.extend({
		draw: function() {
			const ctx = this._chart.ctx;
			const vm = this._view;

			const x = vm.x;
			const o = vm.candleOpen;
			const h = vm.candleHigh;
			const l = vm.candleLow;
			const c = vm.candleClose;
			const t = vm.t_data;

			let borderColors = vm.borderColor;

			if (typeof borderColors === 'string') {
				borderColors = {
					up: borderColors,
					down: borderColors,
					unchanged: borderColors
				};
			}

			let borderColor;

			if (c < o) {
				borderColor = helpers$3.getValueOrDefault(borderColors ? borderColors.up : undefined, globalOpts$1.elements.candlestick.color.up);
				ctx.fillStyle = helpers$3.getValueOrDefault(vm.color ? vm.color.up : undefined, globalOpts$1.elements.candlestick.color.up);
			} else if (c > o) {
				borderColor = helpers$3.getValueOrDefault(borderColors ? borderColors.down : undefined, globalOpts$1.elements.candlestick.color.down);
				ctx.fillStyle = helpers$3.getValueOrDefault(vm.color ? vm.color.down : undefined, globalOpts$1.elements.candlestick.color.down);
			} else {
				borderColor = helpers$3.getValueOrDefault(borderColors ? borderColors.unchanged : undefined, globalOpts$1.elements.candlestick.color.unchanged);
				ctx.fillStyle = helpers$3.getValueOrDefault(vm.color ? vm.color.unchanged : undefined, globalOpts$1.elements.candlestick.color.unchanged);
			}

			ctx.lineWidth = helpers$3.getValueOrDefault(vm.borderWidth, globalOpts$1.elements.candlestick.borderWidth);
			ctx.strokeStyle = helpers$3.getValueOrDefault(borderColor, globalOpts$1.elements.candlestick.borderColor);

			ctx.beginPath();
			ctx.moveTo(x, h);
			ctx.lineTo(x, Math.min(o, c));
			ctx.moveTo(x, l);
			ctx.lineTo(x, Math.max(o, c));
			ctx.stroke();
			ctx.fillRect(x - vm.width / 6, c, vm.width / 3, o - c);
            ctx.closePath();

			for (let k = 0; k < pointData.length; k++) if (pointData[k].entry_date_format == t) fillPoin(ctx, {x, h, l, elem: pointData[k]})
		},
    });
    
    Chart.defaults.candlestick = Chart.helpers.merge({}, Chart.defaults.financial);

	Chart.defaults._set('global', {
		datasets: {
			candlestick: Chart.defaults.global.datasets.bar
		}
    });
    
    Chart.controllers.candlestick = FinancialController.extend({
		dataElementType: CandlestickElement,

		updateElement: function (element, index, reset) {
			const meta = this.getMeta();
			const dataset = this.getDataset();
			const options = this._resolveDataElementOptions(element, index);

			element._xScale = this.getScaleForId(meta.xAxisID);
			element._yScale = this.getScaleForId(meta.yAxisID);
			element._datasetIndex = this.index;
			element._index = index;

			element._model = {
				datasetLabel: dataset.label || '',
				color: dataset.color,
				borderColor: dataset.borderColor,
				borderWidth: dataset.borderWidth,
			};

			this._updateElementGeometry(element, index, reset, options);

			element.pivot();
		},

	});
    //Chartjs.defaults
    //Chartjs.pluginService
    //Chartjs.scaleService
    //Chartjs.layoutService
    //Chartjs.helpers
    //Chartjs.controllers
    //etc
});
 
const chartJsOptions = {
	type: 'candlestick',
	data: {
	  	datasets: [{
			label: ChartTitle,
			data: chartData,
			color: {
				up: '#1CA46B',
				down: '#CD3E60',
				unchanged: '#999',
			}
		}]
	},
	options: {
	  	layout: {
			padding: 20,
			backgroundColor: 'rgba(251, 85, 85, 0.4)',
	  	},
		legend: {
		  	display: true,
		  	position: 'top',
		  	padding: 0,
		  	align: 'start',
		  	labels: {
			  	fontSize: 48,
			  	fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
			  	fontStyle: 'bold',
			  	fontColor: '#FFFFFF',
			  	boxWidth: 0
		  	}
		},
		scales: {
			xAxes: [{
                fontColor: '#ffffff',
                fontSize: 16
            }],
			yAxes: [{
                fontColor: '#ffffff',
                fontSize: 16
            }]
		}
	}
};

function fillPoin(ctx, params) {
	const y  = (params.l < params.h ? params.l : params.h) - 10,
		data = params.elem,
		dateTime = dateTimeFormat(data.entry_date),
		circleClr = ctx.createLinearGradient(0, 20, 0, 0);
	
	let borderClr, firstClr, secondClr

	if (data.entry_action == "long") {
		borderClr = 'rgba(25, 140, 127, 0.2)';
		firstClr  = "#198C7F";
		secondClr = "#16B3EA";
	} else if (data.entry_action == "short") {
		borderClr = 'rgba(189, 54, 86, 0.2)';
		firstClr  = "#D63535";
		secondClr = "#9952E0";
	} else {
		borderClr = 'rgba(153, 153, 153, 0.2)';
		firstClr  = "rgba(153, 153, 153, 0.2)";
		secondClr = "rgba(153, 153, 153, 0.2)";
	}
		
	ctx.fillStyle = borderClr
	ctx.beginPath();
	ctx.arc(params.x, y - 4, 13, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();

	circleClr.addColorStop(0, firstClr);
	circleClr.addColorStop(1, secondClr);

	ctx.fillStyle = circleClr;
	ctx.beginPath();
	ctx.arc(params.x, y - 4, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();

	if (data.exit_action == "closeLong") {
		ctx.moveTo(params.x - 6, y - 2);
		ctx.lineTo(params.x + 6, y - 2);
		ctx.lineTo(params.x, y - 8);
	} else if (data.exit_action == "closeShort") {
		ctx.moveTo(params.x, y);
		ctx.lineTo(params.x - 6, y - 6);
		ctx.lineTo(params.x + 6, y - 6);
	}

	ctx.fillStyle = "#ffffff";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(params.x, y - 14);
	ctx.lineTo(params.x - 4, y - 20);
	ctx.arcTo(params.x - 80, y - 20, params.x - 80, y - 28, 4);
	ctx.arcTo(params.x - 80, y - 120, params.x - 72, y - 120, 4);
	ctx.arcTo(params.x + 80, y - 120, params.x + 80, y - 116, 4);
	ctx.arcTo(params.x + 80, y - 20, params.x + 72, y - 20, 4);
	ctx.lineTo(params.x + 4, y - 20);
	ctx,lineWidth = 1
	ctx.fillStyle = "#3D4977";
	ctx.strokeStyle = "#39436A";
	ctx.stroke();
	ctx.fill();
    ctx.closePath();
    
	ctx.font = "bold 24px 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";
	ctx.fillStyle = "#ffffff"; // "#AEC6EE"
	ctx.textAlign = "center";
	ctx.fillText(dateTime, params.x, y - 40);
	ctx.fillText(summFormat(data.entry_price), params.x, y - 70);
	ctx.fillText(typeActions[data.entry_action] + ": " + data.code, params.x, y - 100);
	ctx.globalCompositeOperation = "source-over";
}

function summFormat(params) {
    let nums = ((params + "").split("").reverse().join("").replace(/(\d{3})/g, "$1,").split("").reverse().join("").replace(/^ /, "")).split(".");
    let finalStr = nums[0] + (nums[1] ? "." + (nums[1]).substring(0, 2) : "") + "$"

    if (finalStr[0] == ",") finalStr = finalStr.replace(/^,/, '')
    
    return finalStr
}

function dateTimeFormat(params) {
    let dateTimeStrs = params.split("T")
    let date = `${dateTimeStrs[0].split("-")[2]} ${months[dateTimeStrs[0].split("-")[1]]}`
    let time = `${dateTimeStrs[1].split(":")[0]}:${dateTimeStrs[1].split(":")[1]}` 

    return `${date} ${time}`
}

function dataSet(params) {
	for (let i = 0; i < params.length; i++) {
		const el = params[i];

		chartData.push({
			t: el.time,
			o: el.open,
			h: el.high,
			l: el.low,
			c: el.close,
		})
		
	}
}

function setPoints(params) {
	for (let i = 0; i < params.length; i++) {
		const elem = params[i];
		
		if (elem.entry_action !== null && elem.exit_action !== null) {
			pointData.push({
				code: elem["code"],
				entry_price: elem["entryPrice"],
				entry_action: elem["entryAction"],
				entry_date: elem["entryDate"],
				entry_date_format: Date.parse(elem["entryDate"]),
				exit_price: elem["exitPrice"],
				exit_action: elem["exitAction"]
			})
		}
	}
}

return chartNode.drawChart(chartJsOptions).then(() => {
    return chartNode.getImageBuffer('image/png');
}).then(buffer => {
    Array.isArray(buffer)
    return chartNode.getImageStream('image/png');
}).then(streamResult => {
    streamResult.stream
    streamResult.length
    return chartNode.writeImageToFile('image/png', './testimage.png');
}).then(() => { });