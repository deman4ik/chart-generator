const { generateImage } = require("./chartGenerator");

const robot = {
	"id": "37dd7d07-99f3-471c-997d-cae0cbe188eb",
	"name": "PAR-1 Bitfinex XLM/USD 8h",
	"exchange": "bitfinex",
	"asset": "XLM",
	"currency": "USD",
	"timeframe": 480
};

const position = {
		"code": "p_15",
		"status": "open",
		"entryPrice": 0.057777,
		"entryDate": "2019-11-22T10:01:51.656",
		"entryCandleTimestamp": "2019-11-22T08:00:00",
		"entryAction": "short",
		"exitPrice": null,
		"exitDate": null,
		"exitCandleTimestamp": null,
		"exitAction": null,
		"profit": null
};

const candles = [
  {
	"id": "fb441329-8639-45f3-999f-fedf0f597eb1",
	"time": 1574208000000,
	"timestamp": "2019-11-20T00:00:00",
	"open": 0.065858,
	"high": 0.066261,
	"low": 0.065319,
	"close": 0.0656,
	"volume": 124252.22837399998
  },
  {
	"id": "8e24183f-1776-41e3-b32d-eae665399b07",
	"time": 1574236800000,
	"timestamp": "2019-11-20T08:00:00",
	"open": 0.065718,
	"high": 0.066079,
	"low": 0.0645,
	"close": 0.065732,
	"volume": 104676.886939
  },
  {
	"id": "2f09c24c-a6fb-41b2-8e55-d326c4b1f1d0",
	"time": 1574265600000,
	"timestamp": "2019-11-20T16:00:00",
	"open": 0.064973,
	"high": 0.065349,
	"low": 0.063923,
	"close": 0.063923,
	"volume": 44876.898754
  },
  {
	"id": "578a732a-5933-4fc8-90cb-2d7215513e0d",
	"time": 1574294400000,
	"timestamp": "2019-11-21T00:00:00",
	"open": 0.063923,
	"high": 0.063932,
	"low": 0.062823,
	"close": 0.062823,
	"volume": 141870.295216
  },
  {
	"id": "0730bd14-37fc-48b9-88b9-61c2dad48600",
	"time": 1574323200000,
	"timestamp": "2019-11-21T08:00:00",
	"open": 0.062817,
	"high": 0.062817,
	"low": 0.057777,
	"close": 0.060044,
	"volume": 1286631.102515
  },
  {
	"id": "b1b35266-1074-4f33-b068-a61291975293",
	"time": 1574352000000,
	"timestamp": "2019-11-21T16:00:00",
	"open": 0.060391,
	"high": 0.061301,
	"low": 0.060016,
	"close": 0.060946,
	"volume": 280054.293645
  },
  {
	"id": "bc9f039f-8bcb-49b7-9203-971ed1599df8",
	"time": 1574380800000,
	"timestamp": "2019-11-22T00:00:00",
	"open": 0.061139,
	"high": 0.061457,
	"low": 0.058488,
	"close": 0.059477,
	"volume": 160230.214415
  },
  {
	"id": "35c473a8-3a95-47da-855f-abe0b2543910",
	"time": 1574409600000,
	"timestamp": "2019-11-22T08:00:00",
	"open": 0.05975,
	"high": 0.060004,
	"low": 0.053315,
	"close": 0.056293,
	"volume": 1071620.082256
  }
];

generateImage(robot, position, candles)