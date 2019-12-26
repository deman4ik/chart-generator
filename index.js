const { generateImage } = require("./chartGenerator");
 
const robot = {
	"id": "c731a433-5293-49f6-a0aa-be6eee668acf",
	"name": "BR-1 Bitfinex ETH/USD 8h",
	"exchange": "bitfinex",
	"asset": "ETH",
	"currency": "USD",
	"timeframe": 480
};

const position = {
		"code": "p_30",
		"status": "closed",
		"entryPrice": 177.09,
		"entryDate": "2019-11-18T18:28:56.044",
		"entryCandleTimestamp": "2019-11-18T16:00:00",
		"entryAction": "short",
		"exitPrice": 150.96,
		"exitDate": "2019-12-04T13:23:06.447",
		"exitCandleTimestamp": "2019-12-04T08:00:00",
		"exitAction": "closeShort",
		"profit": -26.13
};

const candles = [
  {
	"id": "0d34166c-2aa8-49fa-baf6-e0deb3e310a3",
	"time": 1574035200000,
	"timestamp": "2019-11-18T00:00:00",
	"open": 184.48,
	"high": 185.04,
	"low": 182.81,
	"close": 184,
	"volume": 9035.627815999998
  },
  {
	"id": "766f04cd-f574-4c30-b563-fd35a891d3c5",
	"time": 1574064000000,
	"timestamp": "2019-11-18T08:00:00",
	"open": 184.04,
	"high": 184.44,
	"low": 181.17,
	"close": 181.62,
	"volume": 6002.8999619999995
  },
  {
	"id": "9f45d5bb-4e5b-46cd-ac90-ee8f267d00cc",
	"time": 1574092800000,
	"timestamp": "2019-11-18T16:00:00",
	"open": 181.605785,
	"high": 182.25,
	"low": 175.5,
	"close": 178.55,
	"volume": 25732.261593
  },
  {
	"id": "b97769ac-b282-434d-a7dd-3b211be7a5dd",
	"time": 1574121600000,
	"timestamp": "2019-11-19T00:00:00",
	"open": 178.62,
	"high": 178.96,
	"low": 176.03,
	"close": 176.9,
	"volume": 8851.044409
  },
  {
	"id": "2dd78c34-34c0-4f81-97c1-74dfc7adb9e9",
	"time": 1574150400000,
	"timestamp": "2019-11-19T08:00:00",
	"open": 176.86,
	"high": 178,
	"low": 174.2,
	"close": 175.784107,
	"volume": 10185.696660000001
  },
  {
	"id": "8b16fbd3-0be1-4685-a96e-c93b423755c9",
	"time": 1574179200000,
	"timestamp": "2019-11-19T16:00:00",
	"open": 175.85,
	"high": 177.218416,
	"low": 173.167558,
	"close": 176.46,
	"volume": 5544.613685
  },
  {
	"id": "a4219b5a-e74d-4b38-83ad-ec22db8e60b7",
	"time": 1574208000000,
	"timestamp": "2019-11-20T00:00:00",
	"open": 176.46,
	"high": 178.18,
	"low": 175.47,
	"close": 177.622666,
	"volume": 6301.506434000001
  },
  {
	"id": "737e41dd-bd76-4a39-a83c-6d71ee6c013b",
	"time": 1574236800000,
	"timestamp": "2019-11-20T08:00:00",
	"open": 177.622666,
	"high": 177.844471,
	"low": 174.34,
	"close": 176.44,
	"volume": 4398.4015770000005
  },
  {
	"id": "6db2ab46-17b3-4bb9-a823-339773cc567f",
	"time": 1574265600000,
	"timestamp": "2019-11-20T16:00:00",
	"open": 176.442591,
	"high": 177.83,
	"low": 173.93,
	"close": 175.27,
	"volume": 9710.619974000001
  },
  {
	"id": "4b9b7839-7017-45fe-b7e6-627a40e78b08",
	"time": 1574294400000,
	"timestamp": "2019-11-21T00:00:00",
	"open": 175.26,
	"high": 176.38,
	"low": 174.5,
	"close": 175.06,
	"volume": 4000.219579
  },
  {
	"id": "c944448f-ea06-4bdb-bd66-682895962320",
	"time": 1574323200000,
	"timestamp": "2019-11-21T08:00:00",
	"open": 175.21,
	"high": 175.389829,
	"low": 156.725985,
	"close": 161.9,
	"volume": 56549.80656
  },
  {
	"id": "dd2cbf58-95a4-4f39-bb87-deccdd07cc7e",
	"time": 1574352000000,
	"timestamp": "2019-11-21T16:00:00",
	"open": 161.89,
	"high": 162.4,
	"low": 159,
	"close": 162.05,
	"volume": 16786.127342
  },
  {
	"id": "041773e8-9fa4-4784-9c84-1324db0092ec",
	"time": 1574380800000,
	"timestamp": "2019-11-22T00:00:00",
	"open": 162.03,
	"high": 163.4,
	"low": 154.31,
	"close": 158.63,
	"volume": 18968.869951
  },
  {
	"id": "51ff640c-8977-45c7-ba3c-22a8670a9c27",
	"time": 1574409600000,
	"timestamp": "2019-11-22T08:00:00",
	"open": 158.85,
	"high": 163,
	"low": 138.33,
	"close": 148.88,
	"volume": 86394.844306
  },
  {
	"id": "5e55848d-cfe5-4662-8b76-91229f9aba79",
	"time": 1574438400000,
	"timestamp": "2019-11-22T16:00:00",
	"open": 148.88,
	"high": 155.45,
	"low": 147.24,
	"close": 150.56,
	"volume": 25918.243274
  },
  {
	"id": "ca0cbcd7-1127-45e5-a1ab-015e28675b90",
	"time": 1574467200000,
	"timestamp": "2019-11-23T00:00:00",
	"open": 150.48,
	"high": 152.93,
	"low": 147.26,
	"close": 151.06,
	"volume": 12589.943365999998
  },
  {
	"id": "560fd4ed-1f93-4b72-8cb3-0360d9fc6890",
	"time": 1574496000000,
	"timestamp": "2019-11-23T08:00:00",
	"open": 150.95,
	"high": 154.06,
	"low": 147.71,
	"close": 153.14,
	"volume": 34634.505205999994
  },
  {
	"id": "24d98b75-316b-4e4f-ac06-d0f597ed8660",
	"time": 1574524800000,
	"timestamp": "2019-11-23T16:00:00",
	"open": 153.3,
	"high": 155,
	"low": 150.77,
	"close": 152.77,
	"volume": 11876.423111
  },
  {
	"id": "ecf78ed9-1eec-4c88-8c46-a8929a8809c1",
	"time": 1574553600000,
	"timestamp": "2019-11-24T00:00:00",
	"open": 152.82,
	"high": 153.66,
	"low": 149.6,
	"close": 150.18209,
	"volume": 5053.028902
  },
  {
	"id": "e1cc6592-2a0c-46e0-862d-c6f9ddd1eee7",
	"time": 1574582400000,
	"timestamp": "2019-11-24T08:00:00",
	"open": 150.18209,
	"high": 152,
	"low": 144,
	"close": 144.6,
	"volume": 26158.755436
  },
  {
	"id": "e36b30e2-3270-4504-a4aa-2cfa1b652314",
	"time": 1574611200000,
	"timestamp": "2019-11-24T16:00:00",
	"open": 144.46,
	"high": 146.59,
	"low": 140,
	"close": 141.18,
	"volume": 33252.01633
  },
  {
	"id": "720452aa-fd0c-4033-ad53-d9aa415c4309",
	"time": 1574640000000,
	"timestamp": "2019-11-25T00:00:00",
	"open": 141.17,
	"high": 143.71,
	"low": 133.58,
	"close": 137.09,
	"volume": 68315.238393
  },
  {
	"id": "57e96995-22cc-4a1a-ba33-30900921ed74",
	"time": 1574668800000,
	"timestamp": "2019-11-25T08:00:00",
	"open": 137.15,
	"high": 151.56,
	"low": 136,
	"close": 150.74,
	"volume": 61965.316592
  },
  {
	"id": "170d5900-ee79-466e-9a0c-c6d26c761f22",
	"time": 1574697600000,
	"timestamp": "2019-11-25T16:00:00",
	"open": 150.79,
	"high": 152.71,
	"low": 145.9,
	"close": 146.58,
	"volume": 14148.477649999999
  },
  {
	"id": "9ff51dcd-a26c-43ab-bc67-9a2a19b7efe3",
	"time": 1574726400000,
	"timestamp": "2019-11-26T00:00:00",
	"open": 146.78,
	"high": 150.855896,
	"low": 144.86,
	"close": 147.96,
	"volume": 11382.236965
  },
  {
	"id": "a16257ce-1620-4ec7-b8d2-66fa6fe1b689",
	"time": 1574755200000,
	"timestamp": "2019-11-26T08:00:00",
	"open": 147.9,
	"high": 148.81,
	"low": 144.57,
	"close": 146.44,
	"volume": 11521.80427
  },
  {
	"id": "269ad8de-606c-43ea-b295-2002f1ffef58",
	"time": 1574784000000,
	"timestamp": "2019-11-26T16:00:00",
	"open": 146.499202,
	"high": 149.693535,
	"low": 144.78,
	"close": 148.31,
	"volume": 9692.121917999999
  },
  {
	"id": "23f2035c-7bef-4cb8-8659-9bc33626a571",
	"time": 1574812800000,
	"timestamp": "2019-11-27T00:00:00",
	"open": 148.36,
	"high": 149.449547,
	"low": 144.787241,
	"close": 147.2,
	"volume": 11341.026940000002
  },
  {
	"id": "56e5e805-fb44-449a-b772-f3778d22b2b2",
	"time": 1574841600000,
	"timestamp": "2019-11-27T08:00:00",
	"open": 147.13,
	"high": 152.69,
	"low": 142,
	"close": 151.57,
	"volume": 31795.615255
  },
  {
	"id": "b96cdf8b-587b-49e1-8eb8-6284372ac7ff",
	"time": 1574870400000,
	"timestamp": "2019-11-27T16:00:00",
	"open": 151.62,
	"high": 156.56,
	"low": 149.54,
	"close": 153.34,
	"volume": 23888.95197
  },
  {
	"id": "84bb5d91-363c-4602-96a2-6c9c38397016",
	"time": 1574899200000,
	"timestamp": "2019-11-28T00:00:00",
	"open": 153.27,
	"high": 155.45,
	"low": 151.16,
	"close": 153,
	"volume": 9655.652986000001
  },
  {
	"id": "230e01f3-6730-4221-9102-8bf6651fed33",
	"time": 1574928000000,
	"timestamp": "2019-11-28T08:00:00",
	"open": 153,
	"high": 155.32,
	"low": 150.68,
	"close": 154.52,
	"volume": 14383.226518000001
  },
  {
	"id": "688788a1-da09-48be-96f0-0851e00b6a40",
	"time": 1574956800000,
	"timestamp": "2019-11-28T16:00:00",
	"open": 154.79,
	"high": 155.13,
	"low": 150.11,
	"close": 151.52,
	"volume": 7272.095384
  },
  {
	"id": "ad66f7af-339c-4b10-a6a9-878cb01992b6",
	"time": 1574985600000,
	"timestamp": "2019-11-29T00:00:00",
	"open": 151.4,
	"high": 154,
	"low": 151.05,
	"close": 153.68,
	"volume": 5237.827649
  },
  {
	"id": "892ea2b1-7fe0-44b2-a9c5-45f8716ffb25",
	"time": 1575014400000,
	"timestamp": "2019-11-29T08:00:00",
	"open": 153.73,
	"high": 158.85,
	"low": 152.47,
	"close": 158.004318,
	"volume": 18418.414356
  },
  {
	"id": "27e632db-ef41-4440-bd2f-cd187e43b02a",
	"time": 1575043200000,
	"timestamp": "2019-11-29T16:00:00",
	"open": 158.001172,
	"high": 158.676302,
	"low": 153.26,
	"close": 155.53,
	"volume": 13321.385279
  },
  {
	"id": "dc4eda47-4ae2-4d1d-b578-f719e0704314",
	"time": 1575072000000,
	"timestamp": "2019-11-30T00:00:00",
	"open": 155.54,
	"high": 156.63,
	"low": 153.76,
	"close": 155.675506,
	"volume": 7178.430304999999
  },
  {
	"id": "822153bb-0922-4b07-98c8-1f66542cbb01",
	"time": 1575100800000,
	"timestamp": "2019-11-30T08:00:00",
	"open": 155.675506,
	"high": 155.719579,
	"low": 151.48,
	"close": 152.53,
	"volume": 5962.980748
  },
  {
	"id": "56dd20ec-9c8d-4ea3-b032-1f9181388610",
	"time": 1575129600000,
	"timestamp": "2019-11-30T16:00:00",
	"open": 152.54635,
	"high": 153.34,
	"low": 150.03,
	"close": 152.53,
	"volume": 13245.944556999999
  },
  {
	"id": "de43950a-46af-4138-9fd7-7be7a98431bd",
	"time": 1575158400000,
	"timestamp": "2019-12-01T00:00:00",
	"open": 152.453962,
	"high": 152.453962,
	"low": 146.800362,
	"close": 147.82,
	"volume": 14163.951503
  },
  {
	"id": "9991131d-a694-4612-9724-269b4ddaa9e9",
	"time": 1575187200000,
	"timestamp": "2019-12-01T08:00:00",
	"open": 147.82,
	"high": 153.55,
	"low": 146.74,
	"close": 150.35,
	"volume": 12653.95421
  },
  {
	"id": "5314ee2f-3ff8-4c05-8f6e-f61a5f810c3c",
	"time": 1575216000000,
	"timestamp": "2019-12-01T16:00:00",
	"open": 150.34272,
	"high": 153.03,
	"low": 149.79,
	"close": 151.84,
	"volume": 6759.462876
  },
  {
	"id": "7bb19fd5-ffc7-4e8e-9ee0-4d862fb70a43",
	"time": 1575244800000,
	"timestamp": "2019-12-02T00:00:00",
	"open": 152.04,
	"high": 152.73,
	"low": 147.66,
	"close": 149.42,
	"volume": 8422.482892
  },
  {
	"id": "fc686b79-f2ac-4335-b25c-a110f47c48ca",
	"time": 1575273600000,
	"timestamp": "2019-12-02T08:00:00",
	"open": 149.42,
	"high": 151.43,
	"low": 148.25,
	"close": 149.33,
	"volume": 9839.042739999999
  },
  {
	"id": "305690db-5e17-41a9-bfd1-48de41861f91",
	"time": 1575302400000,
	"timestamp": "2019-12-02T16:00:00",
	"open": 149.43,
	"high": 150.61,
	"low": 147.84,
	"close": 149.69,
	"volume": 6523.1993680000005
  },
  {
	"id": "6e3020d7-4a52-4bda-b03f-395e41ff0900",
	"time": 1575331200000,
	"timestamp": "2019-12-03T00:00:00",
	"open": 149.64,
	"high": 150.96,
	"low": 148.98,
	"close": 149.15,
	"volume": 4392.300243
  },
  {
	"id": "6c0be317-6dc6-4168-84d4-9012bbded1de",
	"time": 1575360000000,
	"timestamp": "2019-12-03T08:00:00",
	"open": 149.15,
	"high": 149.9,
	"low": 146.01,
	"close": 149.03,
	"volume": 10391.694621999999
  },
  {
	"id": "de00d533-93b7-45fb-8962-275b8f34c52e",
	"time": 1575388800000,
	"timestamp": "2019-12-03T16:00:00",
	"open": 149.02,
	"high": 149.49,
	"low": 147.893255,
	"close": 148.17,
	"volume": 8725.785311000001
  },
  {
	"id": "e16c6a5e-6c24-4ba5-b326-7adaa6630dfb",
	"time": 1575417600000,
	"timestamp": "2019-12-04T00:00:00",
	"open": 148.14,
	"high": 148.18,
	"low": 144.15,
	"close": 145.054799,
	"volume": 16806.765719999996
  },
  {
	"id": "7af55ccb-9286-483c-9833-c87ad545c744",
	"time": 1575446400000,
	"timestamp": "2019-12-04T08:00:00",
	"open": 145.08,
	"high": 155.21,
	"low": 144.5,
	"close": 150.37,
	"volume": 36686.661733999994
  }
];

generateImage(robot, position, candles)