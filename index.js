const { generateImage } = require("./chartGenerator");
 
 const robot = {
	"id": "f1893b3c-8768-40d7-a3c0-a438f994f6f8",
	"name": "BR-1 Bitfinex BTC/USD 1d",
	"exchange": "bitfinex",
	"asset": "BTC",
	"currency": "USD",
	"timeframe": 1440
 };
 
 const position = {
			 "code": "p_68",
			 "status": "closed",
			 "entryPrice": 8982.1,
			 "entryDate": "2019-11-08T09:11:16.28",
			 "entryCandleTimestamp": "2019-11-08T00:00:00",
			 "entryAction": "short",
			 "exitPrice": 7414.4,
			 "exitDate": "2019-11-27T16:49:06.92",
			 "exitCandleTimestamp": "2019-11-27T00:00:00",
			 "exitAction": "closeShort",
			 "profit": 1567.7
 };
 
 const candles = [
	   {
		 "id": "2e0be58c-7b36-496c-a079-0341aa33d0d7",
		 "time": 1573689600000,
		 "timestamp": "2019-11-14T00:00:00",
		 "open": 8800.993697,
		 "high": 8817.4,
		 "low": 8600,
		 "close": 8655.7,
		 "volume": 3304.675936
	   },
	   {
		 "id": "e7884be9-d6cc-4712-a099-03d47be3090b",
		 "time": 1573862400000,
		 "timestamp": "2019-11-16T00:00:00",
		 "open": 8495.8,
		 "high": 8577,
		 "low": 8440.1,
		 "close": 8523.5,
		 "volume": 1534.610947
	   },
	   {
		 "id": "8f7d23b2-da0b-4a46-9174-19b7f2ea0ea7",
		 "time": 1573948800000,
		 "timestamp": "2019-11-17T00:00:00",
		 "open": 8523.4,
		 "high": 8699.5,
		 "low": 8404.4,
		 "close": 8537.3,
		 "volume": 2837.153673
	   },
	   {
		 "id": "e44891f1-8db9-43a2-90df-60199945df7d",
		 "time": 1574035200000,
		 "timestamp": "2019-11-18T00:00:00",
		 "open": 8537,
		 "high": 8537,
		 "low": 8117,
		 "close": 8219.5,
		 "volume": 6362.436607
	   },
	   {
		 "id": "2cf6a10a-d938-41c4-acd2-9c2eb13cf4aa",
		 "time": 1574294400000,
		 "timestamp": "2019-11-21T00:00:00",
		 "open": 8126.4,
		 "high": 8155.9,
		 "low": 7500,
		 "close": 7671.1,
		 "volume": 9890.619938
	   },
	   {
		 "id": "4925ef4e-c1f2-4559-9354-aa1b7fb74ac3",
		 "time": 1574380800000,
		 "timestamp": "2019-11-22T00:00:00",
		 "open": 7671.1,
		 "high": 7766,
		 "low": 6819.2,
		 "close": 7317.2,
		 "volume": 19368.415301
	   },
	   {
		 "id": "04f06152-234e-4670-ad9f-20b1f653f4f9",
		 "time": 1574467200000,
		 "timestamp": "2019-11-23T00:00:00",
		 "open": 7318.6,
		 "high": 7385,
		 "low": 7141,
		 "close": 7352.6,
		 "volume": 4626.890504
	   },
	   {
		 "id": "84bc9b9d-aa66-4fef-a462-88715c2631cb",
		 "time": 1572825600000,
		 "timestamp": "2019-11-04T00:00:00",
		 "open": 9223,
		 "high": 9645,
		 "low": 9152,
		 "close": 9440,
		 "volume": 7470.059783
	   },
	   {
		 "id": "40b31d68-1a6c-46a8-8a54-7061b43a004b",
		 "time": 1572912000000,
		 "timestamp": "2019-11-05T00:00:00",
		 "open": 9441.2,
		 "high": 9504.095482,
		 "low": 9185.1,
		 "close": 9339.7,
		 "volume": 3412.666663
	   },
	   {
		 "id": "6b142061-e4ec-4956-b198-b0bf30651229",
		 "time": 1572998400000,
		 "timestamp": "2019-11-06T00:00:00",
		 "open": 9337.19572,
		 "high": 9475,
		 "low": 9278,
		 "close": 9352.8,
		 "volume": 3469.757471
	   },
	   {
		 "id": "07e6c763-05c3-4610-9227-39986e6e214e",
		 "time": 1573084800000,
		 "timestamp": "2019-11-07T00:00:00",
		 "open": 9354.9295,
		 "high": 9387.1,
		 "low": 9051.6,
		 "close": 9209.2,
		 "volume": 3746.143135
	   },
	   {
		 "id": "388dcee6-ee4d-437a-8fe2-ae3e8f64af1d",
		 "time": 1573171200000,
		 "timestamp": "2019-11-08T00:00:00",
		 "open": 9212.5,
		 "high": 9252.9,
		 "low": 8681,
		 "close": 8782.3,
		 "volume": 7864.404383
	   },
	   {
		 "id": "c354d316-147d-4884-9c67-6b60a1aa54ad",
		 "time": 1573516800000,
		 "timestamp": "2019-11-12T00:00:00",
		 "open": 8737.715159,
		 "high": 8910,
		 "low": 8602,
		 "close": 8830,
		 "volume": 3504.663003
	   },
	   {
		 "id": "0ba2db8b-f3be-46b1-8f46-adad8805d637",
		 "time": 1573257600000,
		 "timestamp": "2019-11-09T00:00:00",
		 "open": 8782.3,
		 "high": 8896,
		 "low": 8734.8,
		 "close": 8828.047204,
		 "volume": 1958.390394
	   },
	   {
		 "id": "5bb0d7fc-8bcd-48cc-9fab-f276319b5cd1",
		 "time": 1573344000000,
		 "timestamp": "2019-11-10T00:00:00",
		 "open": 8828.047204,
		 "high": 9250,
		 "low": 8764,
		 "close": 9069.7,
		 "volume": 4635.786869
	   },
	   {
		 "id": "8038f1a2-0b7f-445d-b3a4-b3eb36d6b5e3",
		 "time": 1573430400000,
		 "timestamp": "2019-11-11T00:00:00",
		 "open": 9069.7,
		 "high": 9108.5,
		 "low": 8616.5,
		 "close": 8737.715159,
		 "volume": 4243.05004
	   },
	   {
		 "id": "dfe41e1b-9c2b-442c-8a9a-ef87853a0bec",
		 "time": 1573603200000,
		 "timestamp": "2019-11-13T00:00:00",
		 "open": 8830,
		 "high": 8849.9,
		 "low": 8730.3,
		 "close": 8801.1,
		 "volume": 1340.100282
	   },
	   {
		 "id": "d58f82f3-1461-42fe-a454-d9fb7724f89d",
		 "time": 1572739200000,
		 "timestamp": "2019-11-03T00:00:00",
		 "open": 9332.2,
		 "high": 9400.6,
		 "low": 9100,
		 "close": 9222.4,
		 "volume": 3616.53932
	   },
	   {
		 "id": "5dcd10f7-dba2-40f6-9300-d9ab216b5b22",
		 "time": 1573776000000,
		 "timestamp": "2019-11-15T00:00:00",
		 "open": 8655.4,
		 "high": 8800,
		 "low": 8420.1,
		 "close": 8495.832625,
		 "volume": 5184.166755
	   },
	   {
		 "id": "246938ba-ced8-45bc-9e80-929fd14be7e7",
		 "time": 1574121600000,
		 "timestamp": "2019-11-19T00:00:00",
		 "open": 8219.5,
		 "high": 8245.530525,
		 "low": 8051.7,
		 "close": 8164.9,
		 "volume": 3703.897242
	   },
	   {
		 "id": "60976018-8a68-496b-b150-07b4fb6dae32",
		 "time": 1574208000000,
		 "timestamp": "2019-11-20T00:00:00",
		 "open": 8164.9,
		 "high": 8257.8,
		 "low": 8081,
		 "close": 8126.4,
		 "volume": 2060.185832
	   },
	   {
		 "id": "0e096bbb-212a-4d82-ac78-598e4140677a",
		 "time": 1574553600000,
		 "timestamp": "2019-11-24T00:00:00",
		 "open": 7352.7,
		 "high": 7372,
		 "low": 6922,
		 "close": 6965.3,
		 "volume": 8576.356089
	   },
	   {
		 "id": "606455a7-3832-400e-b5c3-bab2239364f1",
		 "time": 1574640000000,
		 "timestamp": "2019-11-25T00:00:00",
		 "open": 6965.2,
		 "high": 7414.4,
		 "low": 6618,
		 "close": 7162.8,
		 "volume": 18517.186532
	   },
	   {
		 "id": "89a25847-d8c7-4b81-a0a8-eaf0cbcb8156",
		 "time": 1574726400000,
		 "timestamp": "2019-11-26T00:00:00",
		 "open": 7162.8,
		 "high": 7386.3,
		 "low": 7047.2,
		 "close": 7198.3,
		 "volume": 5197.479427
	   },
	   {
		 "id": "f12500d2-2d2a-496b-b28c-825f477e5613",
		 "time": 1574812800000,
		 "timestamp": "2019-11-27T00:00:00",
		 "open": 7198.6,
		 "high": 7689,
		 "low": 6878.2,
		 "close": 7549.3,
		 "volume": 13895.627007
	   }
	 ];

generateImage(robot, position, candles)