/* ============================================================
   PORTFOLIO MANAGEMENT DASHBOARD — script.js
   Complete rewrite · Chart.js v4 · All Excel data hardcoded
   ============================================================ */

// ────────────────────────────────────────────────────────────
// SECTION 1: CONSTANTS & DATA
// ────────────────────────────────────────────────────────────

const TICKERS = ['STB', 'VNM', 'DCM', 'FPT', 'GMD'];
const SECTORS = {
  STB: 'Banking', VNM: 'Consumer Staples',
  DCM: 'Materials / Fertilizers', FPT: 'Technology', GMD: 'Logistics'
};
const COLORS_MAP = {
  STB: '#38bdf8', VNM: '#f97316', DCM: '#22c55e', FPT: '#ef4444', GMD: '#a855f7'
};

const PRICE_DATA = [
  {date:'2021-05-04',STB:24100,VNM:69685,DCM:11749,FPT:35345,GMD:24608},
  {date:'2021-06-01',STB:32400,VNM:68391,DCM:12303,FPT:43147,GMD:26982},
  {date:'2021-07-01',STB:31000,VNM:70013,DCM:15259,FPT:44039,GMD:32163},
  {date:'2021-08-02',STB:29300,VNM:79065,DCM:15893,FPT:47358,GMD:34034},
  {date:'2021-09-01',STB:27200,VNM:67856,DCM:20060,FPT:46260,GMD:39107},
  {date:'2021-10-01',STB:24700,VNM:70361,DCM:21757,FPT:46510,GMD:35934},
  {date:'2021-11-01',STB:26600,VNM:70517,DCM:26232,FPT:47962,GMD:38074},
  {date:'2021-12-01',STB:29900,VNM:68558,DCM:31054,FPT:49164,GMD:36598},
  {date:'2022-01-04',STB:32100,VNM:67932,DCM:28624,FPT:46811,GMD:34975},
  {date:'2022-02-07',STB:35600,VNM:66517,DCM:21603,FPT:44808,GMD:33942},
  {date:'2022-03-01',STB:32650,VNM:63092,DCM:28470,FPT:46760,GMD:36893},
  {date:'2022-04-01',STB:32200,VNM:65083,DCM:34025,FPT:55572,GMD:42796},
  {date:'2022-05-04',STB:26750,VNM:57754,DCM:27737,FPT:52318,GMD:41689},
  {date:'2022-06-01',STB:22250,VNM:57277,DCM:30244,FPT:55972,GMD:43165},
  {date:'2022-07-01',STB:22000,VNM:58710,DCM:24303,FPT:53353,GMD:37926},
  {date:'2022-08-01',STB:25200,VNM:60582,DCM:24566,FPT:50928,GMD:38738},
  {date:'2022-09-05',STB:24700,VNM:63879,DCM:31352,FPT:52870,GMD:37705},
  {date:'2022-10-03',STB:19200,VNM:58521,DCM:25629,FPT:47227,GMD:35012},
  {date:'2022-11-01',STB:16900,VNM:66104,DCM:26406,FPT:46307,GMD:34983},
  {date:'2022-12-01',STB:19500,VNM:67917,DCM:22727,FPT:45816,GMD:35021},
  {date:'2023-01-03',STB:23500,VNM:65860,DCM:22277,FPT:49067,GMD:34794},
  {date:'2023-02-01',STB:25650,VNM:64769,DCM:21787,FPT:50294,GMD:38954},
  {date:'2023-03-01',STB:25400,VNM:64517,DCM:19293,FPT:49374,GMD:38198},
  {date:'2023-04-03',STB:26750,VNM:62420,DCM:19661,FPT:49619,GMD:39635},
  {date:'2023-05-04',STB:25150,VNM:57554,DCM:19089,FPT:48147,GMD:38349},
  {date:'2023-06-01',STB:28000,VNM:55456,DCM:19702,FPT:51214,GMD:38576},
  {date:'2023-07-03',STB:29700,VNM:59316,DCM:22277,FPT:52992,GMD:39786},
  {date:'2023-08-01',STB:28950,VNM:63762,DCM:25915,FPT:60294,GMD:43190},
  {date:'2023-09-05',STB:32700,VNM:69438,DCM:28370,FPT:69879,GMD:48106},
  {date:'2023-10-02',STB:30850,VNM:65537,DCM:30253,FPT:67280,GMD:50933},
  {date:'2023-11-01',STB:27650,VNM:61029,DCM:25099,FPT:61649,GMD:48203},
  {date:'2023-12-01',STB:27500,VNM:59295,DCM:28684,FPT:66702,GMD:54755},
  {date:'2024-01-02',STB:27750,VNM:59647,DCM:28998,FPT:69229,GMD:55925},
  {date:'2024-02-01',STB:29800,VNM:58948,DCM:28953,FPT:72117,GMD:53819},
  {date:'2024-03-01',STB:31950,VNM:62441,DCM:30656,FPT:79985,GMD:62789},
  {date:'2024-04-01',STB:31400,VNM:59268,DCM:30970,FPT:84317,GMD:62009},
  {date:'2024-05-02',STB:27600,VNM:57853,DCM:28729,FPT:91897,GMD:65675},
  {date:'2024-06-03',STB:29750,VNM:58472,DCM:34869,FPT:98827,GMD:64973},
  {date:'2024-07-01',STB:29300,VNM:58384,DCM:34569,FPT:107494,GMD:63959},
  {date:'2024-08-01',STB:28050,VNM:62187,DCM:33672,FPT:104318,GMD:63196},
  {date:'2024-09-04',STB:30100,VNM:65726,DCM:34994,FPT:111172,GMD:63277},
  {date:'2024-10-01',STB:33500,VNM:64167,DCM:36127,FPT:113596,GMD:61995},
  {date:'2024-11-01',STB:35000,VNM:60231,DCM:34805,FPT:112509,GMD:60377},
  {date:'2024-12-02',STB:33100,VNM:59041,DCM:34994,FPT:119692,GMD:60471},
  {date:'2025-01-02',STB:37000,VNM:58211,DCM:33672,FPT:127940,GMD:62258},
  {date:'2025-02-03',STB:36550,VNM:55813,DCM:32066,FPT:122469,GMD:58966},
  {date:'2025-03-03',STB:38850,VNM:58304,DCM:33530,FPT:118261,GMD:57180},
  {date:'2025-04-01',STB:39700,VNM:56089,DCM:31263,FPT:101426,GMD:54170},
  {date:'2025-05-05',STB:39500,VNM:52492,DCM:32019,FPT:91410,GMD:51255},
  {date:'2025-06-02',STB:41800,VNM:52153,DCM:31877,FPT:97723,GMD:55017},
  {date:'2025-07-01',STB:46950,VNM:54923,DCM:33450,FPT:100851,GMD:54076},
  {date:'2025-08-01',STB:49400,VNM:57311,DCM:35750,FPT:104459,GMD:54418},
  {date:'2025-09-03',STB:56300,VNM:58744,DCM:39650,FPT:100749,GMD:65496},
  {date:'2025-10-01',STB:59800,VNM:59317,DCM:36600,FPT:91182,GMD:64621},
  {date:'2025-11-03',STB:52300,VNM:57300,DCM:34550,FPT:102506,GMD:66565},
  {date:'2025-12-01',STB:49000,VNM:64900,DCM:33700,FPT:95287,GMD:61706},
  {date:'2026-01-05',STB:57900,VNM:60300,DCM:33350,FPT:93709,GMD:58888},
  {date:'2026-02-02',STB:63500,VNM:72600,DCM:37850,FPT:102882,GMD:66273},
  {date:'2026-03-02',STB:67000,VNM:66600,DCM:45950,FPT:88382,GMD:78712},
  {date:'2026-04-01',STB:62200,VNM:61300,DCM:45300,FPT:74276,GMD:75214},
  {date:'2026-05-04',STB:66200,VNM:60900,DCM:42050,FPT:72698,GMD:72979}
];

const EXCEL_STATS = {
  STB: { mean: 0.022047, variance: 0.010318, std: 0.101576 },
  VNM: { mean: -0.000323, variance: 0.003923, std: 0.062630 },
  DCM: { mean: 0.028553, variance: 0.014540, std: 0.120580 },
  FPT: { mean: 0.015078, variance: 0.006046, std: 0.077758 },
  GMD: { mean: 0.020921, variance: 0.005566, std: 0.074608 }
};

const RF_MONTHLY = 0.003666666667;
const RISK_AVERSION_A = 3.5;

const COV_MATRIX = [
  [0.010318, 0.000985, 0.000957, 0.002068, 0.001190],
  [0.000985, 0.003923, 0.001369, 0.001706, 0.000595],
  [0.000957, 0.001369, 0.014540, 0.003390, 0.005234],
  [0.002068, 0.001706, 0.003390, 0.006046, 0.002492],
  [0.001190, 0.000595, 0.005234, 0.002492, 0.005566]
];

const CORR_MATRIX = [
  [1.0000, 0.1549, 0.0782, 0.2618, 0.1570],
  [0.1549, 1.0000, 0.1813, 0.3502, 0.1273],
  [0.0782, 0.1813, 1.0000, 0.3615, 0.5818],
  [0.2618, 0.3502, 0.3615, 1.0000, 0.4295],
  [0.1570, 0.1273, 0.5818, 0.4295, 1.0000]
];

const SOLVER_COMBOS = [
  {name:'STB–VNM–DCM', tickers:['STB','VNM','DCM'], weights:[0.4501,0.1000,0.4499], ret:0.022737, risk:0.075312, sharpe:0.253212},
  {name:'STB–VNM–FPT', tickers:['STB','VNM','FPT'], weights:[0.4967,0.1000,0.4033], ret:0.017000, risk:0.068060, sharpe:0.195899},
  {name:'STB–VNM–GMD', tickers:['STB','VNM','GMD'], weights:[0.3078,0.1000,0.5922], ret:0.019143, risk:0.059445, sharpe:0.260346},
  {name:'STB–DCM–FPT', tickers:['STB','DCM','FPT'], weights:[0.4328,0.4187,0.1485], ret:0.023736, risk:0.075161, sharpe:0.267017},
  {name:'STB–DCM–GMD', tickers:['STB','DCM','GMD'], weights:[0.3418,0.2145,0.4437], ret:0.022943, risk:0.066841, sharpe:0.288388},
  {name:'STB–FPT–GMD', tickers:['STB','FPT','GMD'], weights:[0.3137,0.1000,0.5863], ret:0.020690, risk:0.062039, sharpe:0.274393},
  {name:'VNM–DCM–FPT', tickers:['VNM','DCM','FPT'], weights:[0.1000,0.5599,0.3402], ret:0.021082, risk:0.082803, sharpe:0.210318},
  {name:'VNM–DCM–GMD', tickers:['VNM','DCM','GMD'], weights:[0.1000,0.2636,0.6364], ret:0.020808, risk:0.072164, sharpe:0.237532},
  {name:'VNM–FPT–GMD', tickers:['VNM','FPT','GMD'], weights:[0.1000,0.1532,0.7468], ret:0.017901, risk:0.063221, sharpe:0.225157},
  {name:'DCM–FPT–GMD', tickers:['DCM','FPT','GMD'], weights:[0.2421,0.1645,0.5935], ret:0.021807, risk:0.072361, sharpe:0.250697}
];

const MVEP = {
  tickers: ['STB','DCM','GMD'],
  weights: [0.341817196, 0.214489631, 0.443693173],
  ret: 0.02294266243,
  risk: 0.06684053235,
  sharpe: 0.28838782520
};

const MVP = {
  tickers: ['STB','VNM','GMD'],
  weights: [0.307826209, 0.100000000, 0.592173791],
  ret: 0.01527392265,
  risk: 0.05944538850
};
MVP.sharpe = (MVP.ret - RF_MONTHLY) / MVP.risk;

const CAL_DATA = {
  std: [0,0.01336811,0.02673621,0.04010432,0.05347243,0.06684053,
        0.08020864,0.09357675,0.10694485,0.12031296,0.13368106,
        0.14704917,0.16041728,0.17378538,0.18715349,0.20052160],
  ret: [0.003666667,0.007521866,0.011377065,0.015232264,0.019087463,
        0.022942662,0.026797862,0.030653061,0.034508260,0.038363459,
        0.042218658,0.046073857,0.049929056,0.053784256,0.057639455,
        0.061494654]
};

const EF_DATA = {
  std: [0.06684053,0.06485910,0.06310972,0.06161214,0.06038511,
        0.05944539,0.05880674,0.05847905,0.05846752,0.05877235,
        0.05938867,0.06030693,0.06151361,0.06299213,0.06472387,
        0.06668911],
  ret: [0.02294266,0.02140891,0.01987517,0.01834142,0.01680767,
        0.01527392,0.01374017,0.01220643,0.01067268,0.00913893,
        0.00760518,0.00607143,0.00453769,0.00300394,0.00147019,
        -0.00006356]
};

const Y_STAR = 0.75;
const E_RC = 0.01812366349;
const SIGMA_C = 0.05013039926;
const U_OPT = 0.01372581386;

const CP_DATA = [
  {name:'STB–VNM–DCM',y:0.75,oneMinusY:0.25,erc:0.017969,sigmaC:0.056484,utility:0.012386},
  {name:'STB–VNM–FPT',y:0.8107,oneMinusY:0.1893,erc:0.014475,sigmaC:0.055175,utility:0.009148},
  {name:'STB–VNM–GMD',y:0.75,oneMinusY:0.25,erc:0.015274,sigmaC:0.044584,utility:0.011795},
  {name:'STB–DCM–FPT',y:0.75,oneMinusY:0.25,erc:0.018719,sigmaC:0.056370,utility:0.013158},
  {name:'STB–DCM–GMD',y:0.75,oneMinusY:0.25,erc:0.018124,sigmaC:0.050130,utility:0.013726},
  {name:'STB–FPT–GMD',y:0.75,oneMinusY:0.25,erc:0.016434,sigmaC:0.046529,utility:0.012645},
  {name:'VNM–DCM–FPT',y:0.6982,oneMinusY:0.3018,erc:0.015826,sigmaC:0.057815,utility:0.009977},
  {name:'VNM–DCM–GMD',y:0.75,oneMinusY:0.25,erc:0.016523,sigmaC:0.054123,utility:0.011396},
  {name:'VNM–FPT–GMD',y:0.75,oneMinusY:0.25,erc:0.014343,sigmaC:0.047416,utility:0.010408},
  {name:'DCM–FPT–GMD',y:0.75,oneMinusY:0.25,erc:0.017272,sigmaC:0.054271,utility:0.012118}
];

const FIN_YEARS = [2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
const FIN_INCOME = [68900000,73034000,77416040,82061002,86984663,92203742,97735967,103600125,109816132,116405100];
const FIN_EXPENSE = [53756400,55261007,56815416,58421276,60080291,61794218,63564877,65394144,67283961,69236330];
const FIN_NET_CF = FIN_INCOME.map((v,i) => v - FIN_EXPENSE[i]);
const FIN_INVEST = [7571800,8886497,10300312,14183836,16142623,18245714,20502654,22923588,25519303,28301262];
const FIN_HOUSE = [2271540,2665949,3090094,7091918,8071312,9122857,10251327,11461794,12759652,14150631];
const FIN_CAR = [3785900,4443248,5150156,0,0,0,0,0,0,0];
const FIN_EMERG = [1514360,1777299,2060062,2363973,2690437,3040952,3417109,3820598,4253217,4716877];

const MVEP_ACCUM = [90861600,219839060,398716286,170206027,405764860,726767337,1159494593,1738344835,2508362114,3528555357];
const SAVINGS_ACCUM = [90861600,202951255,338732073,529262025,754729223,1018961549,1326131090,1680782014,2087860572,2552747355];
const ANNUAL_CONTRIB = [90861600,106637959,123603743,170206027,193711477,218948573,246031847,275083059,306231637,339615149];

const CAR_FUND = [45430800,101475628,169366037];
const CAR_TARGET = 800000000;
const HOUSE_FUND = [39340803,73692638,115195320,207210052,316498394,444962584,594676263,767898368,967088089,1194920948];
const HOUSE_TARGET = 4000000000;


// ────────────────────────────────────────────────────────────
// SECTION 2: UTILITY FUNCTIONS
// ────────────────────────────────────────────────────────────

const money = new Intl.NumberFormat('vi-VN');

function pct(x, digits = 2) {
  if (x == null || isNaN(x)) return '—';
  return (x * 100).toFixed(digits) + '%';
}

function num(x, digits = 3) {
  if (x == null || isNaN(x)) return '—';
  return Number(x).toFixed(digits);
}

function vnd(x) {
  if (x == null || isNaN(x)) return '—';
  return money.format(Math.round(x)) + ' ₫';
}

function latest() {
  return PRICE_DATA[PRICE_DATA.length - 1];
}

function previous() {
  return PRICE_DATA[PRICE_DATA.length - 2];
}

function priceSeries(ticker) {
  return PRICE_DATA.map(d => d[ticker]);
}

function returnsSeries(ticker) {
  const prices = priceSeries(ticker);
  const ret = [];
  for (let i = 1; i < prices.length; i++) {
    ret.push((prices[i] - prices[i - 1]) / prices[i - 1]);
  }
  return ret;
}

function normalizedSeries(ticker) {
  const prices = priceSeries(ticker);
  const base = prices[0];
  return prices.map(p => (p / base) * 100);
}

function movingAverage(arr, window = 6) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < window - 1) {
      result.push(null);
    } else {
      let sum = 0;
      for (let j = i - window + 1; j <= i; j++) sum += arr[j];
      result.push(sum / window);
    }
  }
  return result;
}

function latestChange(ticker) {
  const l = latest()[ticker];
  const p = previous()[ticker];
  const diff = l - p;
  const rate = diff / p;
  return { diff, rate };
}

function pmIndexSeries() {
  const normalized = TICKERS.map(t => normalizedSeries(t));
  const len = normalized[0].length;
  const idx = [];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < TICKERS.length; j++) sum += normalized[j][i];
    idx.push(sum / TICKERS.length);
  }
  return idx;
}

function pmIndexReturns() {
  const idx = pmIndexSeries();
  const ret = [];
  for (let i = 1; i < idx.length; i++) {
    ret.push((idx[i] - idx[i - 1]) / idx[i - 1]);
  }
  return ret;
}

function maxDrawdown(ticker) {
  const prices = priceSeries(ticker);
  let peak = prices[0];
  let mdd = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > peak) peak = prices[i];
    const dd = (peak - prices[i]) / peak;
    if (dd > mdd) mdd = dd;
  }
  return mdd;
}

function beta(ticker) {
  const ri = returnsSeries(ticker);
  const rm = pmIndexReturns();
  const n = Math.min(ri.length, rm.length);
  let sumRi = 0, sumRm = 0;
  for (let i = 0; i < n; i++) { sumRi += ri[i]; sumRm += rm[i]; }
  const meanRi = sumRi / n;
  const meanRm = sumRm / n;
  let cov = 0, varM = 0;
  for (let i = 0; i < n; i++) {
    cov += (ri[i] - meanRi) * (rm[i] - meanRm);
    varM += (rm[i] - meanRm) * (rm[i] - meanRm);
  }
  return cov / varM;
}

function signalFor(ticker) {
  const b = beta(ticker);
  const m = EXCEL_STATS[ticker].mean;
  if (m > 0.02 && b > 1.0) return 'Buy mạnh';
  if (m > 0.01 && b > 0.8) return 'Buy';
  if (m > 0 && b >= 0.5) return 'Nắm giữ';
  if (m < 0) return 'Sell';
  return 'Trung lập';
}


// ────────────────────────────────────────────────────────────
// SECTION 3: STATE VARIABLES
// ────────────────────────────────────────────────────────────

let selectedTicker = 'STB';
let chartMode = 'price';
let matrixMode = 'corr';
let mainChart, allocationChart, riskReturnChart, frontierChart, sharpeBarChart;
let pieChart, finPlanChart1, finPlanChart2, accumChart, carFundChart, houseFundChart;
let mcDistChart, mcPathsChart, mcExpectedChart, cpCompareChart;
let orderLog = JSON.parse(localStorage.getItem('demoOrders') || '[]');


// ────────────────────────────────────────────────────────────
// SECTION 5: CHART OPTIONS HELPER
// ────────────────────────────────────────────────────────────

function getCSS(prop, fallback) {
  const val = getComputedStyle(document.documentElement).getPropertyValue(prop).trim();
  return val || fallback;
}

function chartOptions(overrides = {}) {
  const textColor = getCSS('--text', '#e2e8f0');
  const mutedColor = getCSS('--muted', '#94a3b8');
  const base = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 600 },
    plugins: {
      legend: {
        labels: { color: textColor, font: { size: 12 } }
      },
      tooltip: {
        backgroundColor: 'rgba(15,23,42,0.95)',
        titleColor: '#f8fafc',
        bodyColor: '#e2e8f0',
        borderColor: 'rgba(148,163,184,0.3)',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 10
      }
    },
    scales: {
      x: {
        ticks: { color: mutedColor, font: { size: 10 }, maxRotation: 45 },
        grid: { color: 'rgba(148,163,184,0.1)' }
      },
      y: {
        ticks: { color: mutedColor, font: { size: 11 } },
        grid: { color: 'rgba(148,163,184,0.1)' }
      }
    }
  };
  return deepMerge(base, overrides);
}

function deepMerge(target, source) {
  const out = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      out[key] = deepMerge(out[key] || {}, source[key]);
    } else {
      out[key] = source[key];
    }
  }
  return out;
}


// ────────────────────────────────────────────────────────────
// SECTION 4: RENDER FUNCTIONS
// ────────────────────────────────────────────────────────────

// 4.1 Header & Market ─────────────────────────────────────

function renderHeaderCards() {
  const idx = pmIndexSeries();
  const lastIdx = idx[idx.length - 1];
  const prevIdx = idx[idx.length - 2];
  const change = ((lastIdx - prevIdx) / prevIdx * 100).toFixed(2);
  const sign = change >= 0 ? '+' : '';

  const el = (id) => document.getElementById(id);

  const pmEl = el('pmIndex');
  if (pmEl) pmEl.innerHTML = `<span class="metric-value">${lastIdx.toFixed(2)}</span><span class="metric-sub ${change >= 0 ? 'up' : 'down'}">${sign}${change}%</span>`;

  const pmChangeEl = el('pmIndexChange');
  if (pmChangeEl) pmChangeEl.textContent = `${sign}${change}%`;

  const bestEl = el('bestSharpeCard');
  if (bestEl) bestEl.innerHTML = `<span class="metric-value">${MVEP.sharpe.toFixed(4)}</span><span class="metric-sub">Best Sharpe Ratio</span>`;

  const comboEl = el('bestComboCard');
  if (comboEl) comboEl.innerHTML = `<span class="metric-value">STB–DCM–GMD</span><span class="metric-sub">MVEP Portfolio</span>`;

  const rfEl = el('rfCard');
  if (rfEl) rfEl.innerHTML = `<span class="metric-value">${pct(RF_MONTHLY, 4)}</span><span class="metric-sub">Rf/month (4.40%/year)</span>`;

  const raEl = el('riskAversionCard');
  if (raEl) raEl.innerHTML = `<span class="metric-value">A = ${RISK_AVERSION_A}</span><span class="metric-sub">y* = ${pct(Y_STAR, 0)}</span>`;
}

function renderTickerTape() {
  const el = document.getElementById('tickertape');
  if (!el) return;
  const l = latest();
  const p = previous();
  let html = '';
  TICKERS.forEach(t => {
    const price = l[t];
    const prev = p[t];
    const chg = ((price - prev) / prev * 100).toFixed(2);
    const cls = chg >= 0 ? 'up' : 'down';
    const sign = chg >= 0 ? '+' : '';
    html += `<span class="tape-item ${cls}"><strong>${t}</strong> ${money.format(price)} <small>${sign}${chg}%</small></span>`;
  });
  el.innerHTML = `<div class="tape-track">${html}${html}</div>`;
}


// 4.2 Watchlist & Stock Detail ─────────────────────────────

function renderWatchlist() {
  const el = document.getElementById('watchlist');
  if (!el) return;
  const l = latest();
  let html = '';
  TICKERS.forEach(t => {
    const chg = latestChange(t);
    const cls = chg.rate >= 0 ? 'up' : 'down';
    const sign = chg.rate >= 0 ? '+' : '';
    const active = t === selectedTicker ? 'active' : '';
    html += `<div class="watch-card ${active}" data-ticker="${t}">
      <div class="watch-header">
        <span class="watch-ticker" style="color:${COLORS_MAP[t]}">${t}</span>
        <span class="watch-sector">${SECTORS[t]}</span>
      </div>
      <div class="watch-price">${money.format(l[t])}</div>
      <div class="watch-change ${cls}">${sign}${pct(chg.rate)} | β=${beta(t).toFixed(2)}</div>
    </div>`;
  });
  el.innerHTML = html;
  el.querySelectorAll('.watch-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedTicker = card.dataset.ticker;
      renderWatchlist();
      renderStockDetail();
      renderMainChart();
    });
  });
}

function renderStockDetail() {
  const t = selectedTicker;
  const l = latest();
  const chg = latestChange(t);
  const cls = chg.rate >= 0 ? 'up' : 'down';
  const sign = chg.rate >= 0 ? '+' : '';
  const stats = EXCEL_STATS[t];
  const b = beta(t);
  const mdd = maxDrawdown(t);
  const sig = signalFor(t);

  const set = (id, val) => { const e = document.getElementById(id); if (e) e.innerHTML = val; };

  set('selectedTicker', `<span style="color:${COLORS_MAP[t]}">${t}</span>`);
  set('selectedSector', SECTORS[t]);
  set('selectedSignal', `<span class="signal signal-${sig.replace(/\s/g,'')}">${sig}</span>`);
  set('selectedPrice', money.format(l[t]) + ' ₫');
  set('selectedChange', `<span class="${cls}">${sign}${money.format(chg.diff)} (${sign}${pct(chg.rate)})</span>`);
  set('selectedMean', pct(stats.mean, 4));
  set('selectedRisk', pct(stats.std, 4));
  set('selectedVariance', num(stats.variance, 6));
  set('selectedBeta', b.toFixed(4));
  set('selectedDrawdown', pct(mdd, 2));
}


// 4.3 Main Chart ──────────────────────────────────────────

function renderMainChart() {
  const canvas = document.getElementById('mainChart');
  if (!canvas) return;
  if (mainChart) { mainChart.destroy(); mainChart = null; }

  const labels = PRICE_DATA.map(d => d.date.substring(0, 7));
  const datasets = [];

  const titleEl = document.getElementById('chartTitle');
  const subEl = document.getElementById('chartSubtitle');

  if (chartMode === 'price') {
    if (titleEl) titleEl.textContent = 'Stock price fluctuations';
    if (subEl) subEl.textContent = '05/2021 – 05/2026 (VNĐ)';
    TICKERS.forEach(t => {
      datasets.push({
        label: t,
        data: priceSeries(t),
        borderColor: COLORS_MAP[t],
        backgroundColor: COLORS_MAP[t] + '22',
        borderWidth: t === selectedTicker ? 3 : 1.5,
        pointRadius: 0,
        tension: 0.3,
        fill: false
      });
    });
    // MA for selected
    const ma = movingAverage(priceSeries(selectedTicker));
    datasets.push({
      label: `${selectedTicker} MA6`,
      data: ma,
      borderColor: COLORS_MAP[selectedTicker],
      borderWidth: 2,
      borderDash: [6, 4],
      pointRadius: 0,
      tension: 0.3,
      fill: false
    });
  } else if (chartMode === 'normalized') {
    if (titleEl) titleEl.textContent = 'Standardized price fluctuations (Base 100)';
    if (subEl) subEl.textContent = 'Compare the investment efficiency from the starting point';
    TICKERS.forEach(t => {
      datasets.push({
        label: t,
        data: normalizedSeries(t),
        borderColor: COLORS_MAP[t],
        borderWidth: t === selectedTicker ? 3 : 1.5,
        pointRadius: 0,
        tension: 0.3,
        fill: false
      });
    });
    const ma = movingAverage(normalizedSeries(selectedTicker));
    datasets.push({
      label: `${selectedTicker} MA6`,
      data: ma,
      borderColor: COLORS_MAP[selectedTicker],
      borderWidth: 2,
      borderDash: [6, 4],
      pointRadius: 0,
      tension: 0.3,
      fill: false
    });
  } else {
    if (titleEl) titleEl.textContent = 'Monthly profit rate';
    if (subEl) subEl.textContent = 'Simple monthly returns';
    const retLabels = labels.slice(1);
    TICKERS.forEach(t => {
      datasets.push({
        label: t,
        data: returnsSeries(t),
        borderColor: COLORS_MAP[t],
        borderWidth: t === selectedTicker ? 2.5 : 1,
        pointRadius: 0,
        tension: 0.3,
        fill: false
      });
    });
    mainChart = new Chart(canvas, {
      type: 'line',
      data: { labels: retLabels, datasets },
      options: chartOptions({
        plugins: {
          tooltip: {
            callbacks: { label: ctx => `${ctx.dataset.label}: ${pct(ctx.parsed.y, 2)}` }
          }
        },
        scales: {
          y: {
            ticks: {
              callback: v => pct(v, 1),
              color: getCSS('--muted', '#94a3b8')
            },
            grid: { color: 'rgba(148,163,184,0.1)' }
          }
        }
      })
    });
    return;
  }

  mainChart = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: chartOptions({
      plugins: {
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.y;
              return chartMode === 'price'
                ? `${ctx.dataset.label}: ${money.format(v)} ₫`
                : `${ctx.dataset.label}: ${v.toFixed(2)}`;
            }
          }
        }
      }
    })
  });
}


// 4.4 Price Board ─────────────────────────────────────────

function renderPriceBoard() {
  const el = document.getElementById('priceBoard');
  if (!el) return;
  const l = latest();
  let html = `<table class="data-table"><thead><tr>
    <th>Mã</th><th>Ngành</th><th>Price 05/2026</th><th>+/- month</th><th>% month</th>
    <th>E(r)/month</th><th>Variance</th><th>σ/month</th><th>Signal</th>
  </tr></thead><tbody>`;
  TICKERS.forEach(t => {
    const chg = latestChange(t);
    const cls = chg.rate >= 0 ? 'up' : 'down';
    const sign = chg.rate >= 0 ? '+' : '';
    const s = EXCEL_STATS[t];
    const sig = signalFor(t);
    html += `<tr class="clickable-row" data-ticker="${t}">
      <td style="color:${COLORS_MAP[t]};font-weight:700">${t}</td>
      <td>${SECTORS[t]}</td>
      <td>${money.format(l[t])}</td>
      <td class="${cls}">${sign}${money.format(chg.diff)}</td>
      <td class="${cls}">${sign}${pct(chg.rate)}</td>
      <td>${pct(s.mean, 4)}</td>
      <td>${num(s.variance, 6)}</td>
      <td>${pct(s.std, 4)}</td>
      <td><span class="signal signal-${sig.replace(/\s/g,'')}">${sig}</span></td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
  el.querySelectorAll('.clickable-row').forEach(row => {
    row.addEventListener('click', () => {
      selectedTicker = row.dataset.ticker;
      renderWatchlist();
      renderStockDetail();
      renderMainChart();
    });
  });
}


// 4.5 Statistics Section ──────────────────────────────────

function renderStatsTable() {
  const el = document.getElementById('statsTable');
  if (!el) return;
  let html = `<table class="data-table"><thead><tr>
    <th>Mã</th><th>E(r)/month</th><th>Variance</th><th>σ/month</th>
  </tr></thead><tbody>`;
  TICKERS.forEach(t => {
    const s = EXCEL_STATS[t];
    html += `<tr>
      <td style="color:${COLORS_MAP[t]};font-weight:700">${t}</td>
      <td>${pct(s.mean, 4)}</td>
      <td>${num(s.variance, 6)}</td>
      <td>${pct(s.std, 4)}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}

function renderRiskReturnChart() {
  const canvas = document.getElementById('riskReturnChart');
  if (!canvas) return;
  if (riskReturnChart) { riskReturnChart.destroy(); riskReturnChart = null; }

  const data = TICKERS.map(t => ({
    x: EXCEL_STATS[t].std * 100,
    y: EXCEL_STATS[t].mean * 100
  }));

  riskReturnChart = new Chart(canvas, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Stock',
        data: data,
        backgroundColor: TICKERS.map(t => COLORS_MAP[t]),
        pointRadius: 10,
        pointHoverRadius: 13
      }]
    },
    options: chartOptions({
      plugins: {
        tooltip: {
          callbacks: {
            label: ctx => {
              const t = TICKERS[ctx.dataIndex];
              return `${t}: E(r)=${ctx.parsed.y.toFixed(2)}%, σ=${ctx.parsed.x.toFixed(2)}%`;
            }
          }
        },
        legend: { display: false }
      },
      scales: {
        x: {
          title: { display: true, text: 'Risk σ (%)', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { color: 'rgba(148,163,184,0.1)' }
        },
        y: {
          title: { display: true, text: 'E(r) (%)', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });

  // Draw ticker labels on top
  const labelsPlugin = {
    id: 'riskReturnLabels',
    afterDraw(chart) {
      const ctx2 = chart.ctx;
      const meta = chart.getDatasetMeta(0);
      ctx2.save();
      ctx2.font = 'bold 12px sans-serif';
      ctx2.textAlign = 'center';
      meta.data.forEach((pt, i) => {
        ctx2.fillStyle = COLORS_MAP[TICKERS[i]];
        ctx2.fillText(TICKERS[i], pt.x, pt.y - 14);
      });
      ctx2.restore();
    }
  };
  riskReturnChart.config.plugins = [labelsPlugin];
  riskReturnChart.update();
}


// 4.6 Matrix ──────────────────────────────────────────────

function renderMatrix() {
  const el = document.getElementById('matrixGrid');
  if (!el) return;
  const mat = matrixMode === 'corr' ? CORR_MATRIX : COV_MATRIX;
  const isCorr = matrixMode === 'corr';

  let html = '<table class="matrix-table"><thead><tr><th></th>';
  TICKERS.forEach(t => { html += `<th style="color:${COLORS_MAP[t]}">${t}</th>`; });
  html += '</tr></thead><tbody>';

  TICKERS.forEach((t, i) => {
    html += `<tr><th style="color:${COLORS_MAP[t]}">${t}</th>`;
    TICKERS.forEach((_, j) => {
      const v = mat[i][j];
      let bg;
      if (isCorr) {
        const intensity = Math.abs(v);
        if (v >= 0) {
          const g = Math.round(100 + intensity * 155);
          bg = `rgba(34,${g},80,${0.15 + intensity * 0.6})`;
        } else {
          const r = Math.round(100 + Math.abs(v) * 155);
          bg = `rgba(${r},50,50,${0.15 + Math.abs(v) * 0.6})`;
        }
      } else {
        const maxV = 0.01454;
        const norm = Math.min(Math.abs(v) / maxV, 1);
        if (v >= 0) {
          bg = `rgba(34,197,94,${0.1 + norm * 0.7})`;
        } else {
          bg = `rgba(239,68,68,${0.1 + norm * 0.7})`;
        }
      }
      const display = isCorr ? v.toFixed(4) : v.toFixed(6);
      html += `<td style="background:${bg};text-align:center;font-size:0.8rem">${display}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}


// 4.7 Optimal Risky Portfolio ─────────────────────────────

function renderSolverTable() {
  const el = document.getElementById('optimalTable');
  if (!el) return;
  let html = `<table class="data-table"><thead><tr>
    <th>#</th><th>Portfolio</th><th>Weights</th><th>E(rp)/month</th><th>σp/month</th><th>Sharpe</th>
  </tr></thead><tbody>`;
  SOLVER_COMBOS.forEach((c, i) => {
    const best = c.name === 'STB–DCM–GMD' ? 'best-row' : '';
    const wStr = c.tickers.map((t, j) => `${t}:${pct(c.weights[j], 1)}`).join(', ');
    html += `<tr class="${best}">
      <td>${i + 1}</td>
      <td>${c.name}</td>
      <td style="font-size:0.8rem">${wStr}</td>
      <td>${pct(c.ret, 4)}</td>
      <td>${pct(c.risk, 4)}</td>
      <td>${c.sharpe.toFixed(4)}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}

function renderBestBox() {
  const el = document.getElementById('bestBox');
  if (!el) return;
  const wStr = MVEP.tickers.map((t, i) => `<span style="color:${COLORS_MAP[t]}">${t}: ${pct(MVEP.weights[i], 2)}</span>`).join(' · ');
  el.innerHTML = `
    <div class="best-portfolio-box">
      <h4>🏆 MVEP — Maximum Variance-Adjusted Expected Return Portfolio</h4>
      <div class="best-weights">${wStr}</div>
      <div class="best-metrics">
        <span>E(rp) = ${pct(MVEP.ret, 4)}</span>
        <span>σp = ${pct(MVEP.risk, 4)}</span>
        <span>Sharpe = ${MVEP.sharpe.toFixed(4)}</span>
      </div>
    </div>`;
}


// 4.8 Sharpe Bar Chart ────────────────────────────────────

function renderSharpeBarChart() {
  const canvas = document.getElementById('sharpeBarChart');
  if (!canvas) return;
  if (sharpeBarChart) { sharpeBarChart.destroy(); sharpeBarChart = null; }

  const labels = SOLVER_COMBOS.map(c => c.name);
  const values = SOLVER_COMBOS.map(c => c.sharpe);
  const colors = SOLVER_COMBOS.map(c => c.name === 'STB–DCM–GMD' ? '#ef4444' : '#38bdf8');

  sharpeBarChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Sharpe Ratio',
        data: values,
        backgroundColor: colors,
        borderColor: colors.map(c => c),
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: chartOptions({
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `Sharpe: ${ctx.parsed.x.toFixed(4)}` } }
      },
      scales: {
        x: {
          title: { display: true, text: 'Sharpe Ratio', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { color: 'rgba(148,163,184,0.1)' }
        },
        y: {
          ticks: { color: getCSS('--muted', '#94a3b8'), font: { size: 10 } },
          grid: { display: false }
        }
      }
    })
  });
}


// 4.9 Pie Chart MVEP Weights ──────────────────────────────

function renderPieChart() {
  const canvas = document.getElementById('pieChart');
  if (!canvas) return;
  if (pieChart) { pieChart.destroy(); pieChart = null; }

  pieChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: MVEP.tickers.map((t, i) => `${t} (${pct(MVEP.weights[i], 2)})`),
      datasets: [{
        data: MVEP.weights.map(w => w * 100),
        backgroundColor: MVEP.tickers.map(t => COLORS_MAP[t]),
        borderColor: 'rgba(15,23,42,0.8)',
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: getCSS('--text', '#e2e8f0'), font: { size: 12 }, padding: 15 }
        },
        tooltip: {
          callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed.toFixed(2)}%` }
        }
      }
    }
  });
}


// 4.10 Complete Portfolio Allocation ──────────────────────

function renderAllocation() {
  const canvas = document.getElementById('allocationChart');
  if (!canvas) return;
  if (allocationChart) { allocationChart.destroy(); allocationChart = null; }

  // Outer ring: 75% risky, 25% risk-free
  // Inner breakdown of risky part
  const riskyPct = Y_STAR * 100;
  const rfPct = (1 - Y_STAR) * 100;

  const innerLabels = [
    ...MVEP.tickers.map((t, i) => `${t} (${pct(MVEP.weights[i] * Y_STAR, 2)})`),
    `Risk-Free (${pct(1 - Y_STAR, 0)})`
  ];
  const innerData = [
    ...MVEP.weights.map(w => w * Y_STAR * 100),
    rfPct
  ];
  const innerColors = [
    ...MVEP.tickers.map(t => COLORS_MAP[t]),
    '#64748b'
  ];

  allocationChart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: innerLabels,
      datasets: [{
        data: innerData,
        backgroundColor: innerColors,
        borderColor: 'rgba(15,23,42,0.8)',
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '45%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: getCSS('--text', '#e2e8f0'), font: { size: 11 }, padding: 12 }
        },
        tooltip: {
          callbacks: { label: ctx => `${ctx.label}: ${ctx.parsed.toFixed(2)}%` }
        }
      }
    }
  });

  // Capital allocation table
  renderAllocationTable();
}

function renderAllocationTable() {
  const el = document.getElementById('allocationTable');
  if (!el) return;
  const capEl = document.getElementById('capitalInput');
  const capital = capEl ? parseFloat(capEl.value) || 100000000 : 100000000;

  const risky = capital * Y_STAR;
  const rf = capital * (1 - Y_STAR);

  let html = `<table class="data-table"><thead><tr>
    <th>Thành phần</th><th>Tỷ trọng</th><th>Price trị (VNĐ)</th><th>Số CP (ước tính)</th>
  </tr></thead><tbody>`;

  const l = latest();
  MVEP.tickers.forEach((t, i) => {
    const w = MVEP.weights[i] * Y_STAR;
    const val = capital * w;
    const shares = Math.floor(val / l[t] / 100) * 100;
    html += `<tr>
      <td style="color:${COLORS_MAP[t]};font-weight:600">${t}</td>
      <td>${pct(w, 2)}</td>
      <td>${vnd(val)}</td>
      <td>${money.format(shares)}</td>
    </tr>`;
  });
  html += `<tr class="rf-row">
    <td>Risk-Free (Tiết kiệm)</td>
    <td>${pct(1 - Y_STAR, 0)}</td>
    <td>${vnd(rf)}</td>
    <td>—</td>
  </tr>`;
  html += `<tr class="total-row">
    <td><strong>TỔNG</strong></td>
    <td><strong>100%</strong></td>
    <td><strong>${vnd(capital)}</strong></td>
    <td></td>
  </tr>`;
  html += '</tbody></table>';
  el.innerHTML = html;
}


// 4.11 Manual Portfolio vs Optimal ────────────────────────

function renderManualInputs() {
  const el = document.getElementById('manualWeights');
  if (!el) return;
  let html = '';
  TICKERS.forEach(t => {
    html += `<div class="manual-row">
      <label style="color:${COLORS_MAP[t]};min-width:40px;font-weight:600">${t}</label>
      <input type="range" min="0" max="100" value="${t === 'STB' ? 20 : 20}" class="manual-slider" data-ticker="${t}" id="slider_${t}">
      <input type="number" min="0" max="100" value="20" step="1" class="manual-num" data-ticker="${t}" id="num_${t}" style="width:60px">
      <span>%</span>
    </div>`;
  });
  el.innerHTML = html;

  // Sync sliders and numbers
  el.querySelectorAll('.manual-slider').forEach(slider => {
    slider.addEventListener('input', () => {
      const t = slider.dataset.ticker;
      document.getElementById('num_' + t).value = slider.value;
    });
  });
  el.querySelectorAll('.manual-num').forEach(inp => {
    inp.addEventListener('input', () => {
      const t = inp.dataset.ticker;
      document.getElementById('slider_' + t).value = inp.value;
    });
  });
}

function compareManual() {
  const weights = {};
  let totalW = 0;
  TICKERS.forEach(t => {
    const v = parseFloat(document.getElementById('num_' + t)?.value || 0);
    weights[t] = v / 100;
    totalW += v;
  });

  const el = document.getElementById('comparisonBox');
  if (!el) return;

  if (Math.abs(totalW - 100) > 0.01) {
    el.innerHTML = `<div class="error-box">⚠️ Tổng B trọng = ${totalW.toFixed(1)}% (phải = 100%)</div>`;
    return;
  }

  // Manual portfolio return & risk
  let portRet = 0;
  TICKERS.forEach(t => { portRet += weights[t] * EXCEL_STATS[t].mean; });

  // Portfolio risk: sqrt(w^T * COV * w)
  const wArr = TICKERS.map(t => weights[t]);
  let portVar = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      portVar += wArr[i] * wArr[j] * COV_MATRIX[i][j];
    }
  }
  const portRisk = Math.sqrt(portVar);
  const portSharpe = (portRet - RF_MONTHLY) / portRisk;

  el.innerHTML = `
    <table class="data-table comparison-table"><thead><tr>
      <th>Metric</th><th>Manual Portfolio</th><th>MVEP (Optimal)</th><th>So sánh</th>
    </tr></thead><tbody>
    <tr>
      <td>E(rp)/month</td>
      <td>${pct(portRet, 4)}</td>
      <td>${pct(MVEP.ret, 4)}</td>
      <td class="${portRet >= MVEP.ret ? 'up' : 'down'}">${portRet >= MVEP.ret ? '✅' : '❌'}</td>
    </tr>
    <tr>
      <td>σp/month</td>
      <td>${pct(portRisk, 4)}</td>
      <td>${pct(MVEP.risk, 4)}</td>
      <td class="${portRisk <= MVEP.risk ? 'up' : 'down'}">${portRisk <= MVEP.risk ? '✅' : '❌'}</td>
    </tr>
    <tr>
      <td>Sharpe Ratio</td>
      <td>${portSharpe.toFixed(4)}</td>
      <td>${MVEP.sharpe.toFixed(4)}</td>
      <td class="${portSharpe >= MVEP.sharpe ? 'up' : 'down'}">${portSharpe >= MVEP.sharpe ? '✅' : '❌'}</td>
    </tr>
    </tbody></table>
    <p style="margin-top:8px;color:var(--muted,#94a3b8);font-size:0.85rem">
      ${portSharpe >= MVEP.sharpe
        ? '🎉 Portfolio của bạn có Sharpe cao hơn hoặc bằng MVEP!'
        : '💡 MVEP có hiệu quả rủi ro-sinh lợi tốt hơn.'}
    </p>`;
}


// 4.12 CAL & Efficient Frontier ───────────────────────────

function renderFrontierChart() {
  const canvas = document.getElementById('frontierChart');
  if (!canvas) return;
  if (frontierChart) { frontierChart.destroy(); frontierChart = null; }

  // EF line: first 6 = efficient (solid blue), rest = dashed
  const efEfficientStd = EF_DATA.std.slice(0, 6);
  const efEfficientRet = EF_DATA.ret.slice(0, 6);
  const efIneffStd = EF_DATA.std.slice(5);
  const efIneffRet = EF_DATA.ret.slice(5);

  // CAL line: first 6 solid, rest dashed
  const calSolidStd = CAL_DATA.std.slice(0, 6);
  const calSolidRet = CAL_DATA.ret.slice(0, 6);
  const calDashStd = CAL_DATA.std.slice(5);
  const calDashRet = CAL_DATA.ret.slice(5);

  const datasets = [
    // EF efficient part
    {
      label: 'Efficient Frontier',
      data: efEfficientStd.map((s, i) => ({ x: s * 100, y: efEfficientRet[i] * 100 })),
      borderColor: '#3b82f6',
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0.4,
      fill: false,
      showLine: true,
      type: 'line'
    },
    // EF inefficient part
    {
      label: 'Inefficient Frontier',
      data: efIneffStd.map((s, i) => ({ x: s * 100, y: efIneffRet[i] * 100 })),
      borderColor: '#3b82f6',
      borderWidth: 1.5,
      borderDash: [6, 4],
      pointRadius: 0,
      tension: 0.4,
      fill: false,
      showLine: true,
      type: 'line'
    },
    // CAL solid
    {
      label: 'CAL',
      data: calSolidStd.map((s, i) => ({ x: s * 100, y: calSolidRet[i] * 100 })),
      borderColor: '#f8fafc',
      borderWidth: 2.5,
      pointRadius: 0,
      tension: 0,
      fill: false,
      showLine: true,
      type: 'line'
    },
    // CAL dashed
    {
      label: 'CAL (ext.)',
      data: calDashStd.map((s, i) => ({ x: s * 100, y: calDashRet[i] * 100 })),
      borderColor: '#f8fafc',
      borderWidth: 1.5,
      borderDash: [6, 4],
      pointRadius: 0,
      tension: 0,
      fill: false,
      showLine: true,
      type: 'line'
    },
    // MVEP point
    {
      label: 'MVEP',
      data: [{ x: MVEP.risk * 100, y: MVEP.ret * 100 }],
      backgroundColor: '#ef4444',
      borderColor: '#ef4444',
      pointRadius: 10,
      pointStyle: 'star',
      showLine: false,
      type: 'scatter'
    },
    // MVP point
    {
      label: 'MVP',
      data: [{ x: MVP.risk * 100, y: MVP.ret * 100 }],
      backgroundColor: '#3b82f6',
      borderColor: '#3b82f6',
      pointRadius: 9,
      pointStyle: 'rectRot',
      showLine: false,
      type: 'scatter'
    },
    // Complete Portfolio point
    {
      label: 'Complete Portfolio',
      data: [{ x: SIGMA_C * 100, y: E_RC * 100 }],
      backgroundColor: '#f97316',
      borderColor: '#f97316',
      pointRadius: 9,
      pointStyle: 'crossRot',
      showLine: false,
      type: 'scatter'
    },
    // Risk-free point
    {
      label: 'Rf',
      data: [{ x: 0, y: RF_MONTHLY * 100 }],
      backgroundColor: '#22c55e',
      borderColor: '#22c55e',
      pointRadius: 8,
      pointStyle: 'rect',
      showLine: false,
      type: 'scatter'
    }
  ];

  frontierChart = new Chart(canvas, {
    type: 'scatter',
    data: { datasets },
    options: chartOptions({
      plugins: {
        legend: {
          labels: { color: getCSS('--text', '#e2e8f0'), usePointStyle: true, font: { size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: ctx => `${ctx.dataset.label}: E(r)=${ctx.parsed.y.toFixed(4)}%, σ=${ctx.parsed.x.toFixed(4)}%`
          }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Rủi ro σ (%)', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { color: 'rgba(148,163,184,0.1)' },
          min: 0
        },
        y: {
          title: { display: true, text: 'E(r) (%)', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}

function renderFrontierSummary() {
  const el = document.getElementById('frontierSummary');
  if (!el) return;
  el.innerHTML = `
    <div class="frontier-metrics">
      <div class="fm-item"><span class="fm-label">E(rp) MVEP</span><span class="fm-value">${pct(MVEP.ret, 4)}</span></div>
      <div class="fm-item"><span class="fm-label">σp MVEP</span><span class="fm-value">${pct(MVEP.risk, 4)}</span></div>
      <div class="fm-item"><span class="fm-label">Sharpe MVEP</span><span class="fm-value">${MVEP.sharpe.toFixed(4)}</span></div>
      <div class="fm-item"><span class="fm-label">y*</span><span class="fm-value">${pct(Y_STAR, 0)}</span></div>
      <div class="fm-item"><span class="fm-label">E(rc)</span><span class="fm-value">${pct(E_RC, 4)}</span></div>
      <div class="fm-item"><span class="fm-label">σc</span><span class="fm-value">${pct(SIGMA_C, 4)}</span></div>
      <div class="fm-item"><span class="fm-label">Utility</span><span class="fm-value">${num(U_OPT, 6)}</span></div>
    </div>`;
}


// 4.13 Complete Portfolio Compare ─────────────────────────

function renderCPCompareChart() {
  const canvas = document.getElementById('cpCompareChart');
  if (!canvas) return;
  if (cpCompareChart) { cpCompareChart.destroy(); cpCompareChart = null; }

  const labels = CP_DATA.map(c => c.name);

  cpCompareChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'E(rc) %',
          data: CP_DATA.map(c => c.erc * 100),
          backgroundColor: '#22c55e',
          borderRadius: 3
        },
        {
          label: 'σc %',
          data: CP_DATA.map(c => c.sigmaC * 100),
          backgroundColor: '#ef4444',
          borderRadius: 3
        },
        {
          label: 'Utility %',
          data: CP_DATA.map(c => c.utility * 100),
          backgroundColor: '#a855f7',
          borderRadius: 3
        }
      ]
    },
    options: chartOptions({
      plugins: {
        legend: { labels: { color: getCSS('--text', '#e2e8f0') } },
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(4)}%` } }
      },
      scales: {
        x: {
          ticks: { color: getCSS('--muted', '#94a3b8'), font: { size: 9 }, maxRotation: 45 },
          grid: { display: false }
        },
        y: {
          ticks: { color: getCSS('--muted', '#94a3b8'), callback: v => v.toFixed(2) + '%' },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}


// 4.14 Financial Plan ─────────────────────────────────────

function renderFinPlanChart() {
  const canvas = document.getElementById('finPlanChart1');
  if (!canvas) return;
  if (finPlanChart1) { finPlanChart1.destroy(); finPlanChart1 = null; }

  finPlanChart1 = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: FIN_YEARS.map(String),
      datasets: [
        {
          label: 'Income',
          data: FIN_INCOME,
          backgroundColor: '#22c55e',
          borderRadius: 3
        },
        {
          label: 'Expense',
          data: FIN_EXPENSE,
          backgroundColor: '#ef4444',
          borderRadius: 3
        },
        {
          label: 'Net CF',
          data: FIN_NET_CF,
          backgroundColor: '#3b82f6',
          borderRadius: 3
        }
      ]
    },
    options: chartOptions({
      plugins: {
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${vnd(ctx.parsed.y)}` } }
      },
      scales: {
        x: {
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { display: false }
        },
        y: {
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => (v / 1e6).toFixed(0) + 'M'
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}

function renderCashFlowAllocation() {
  const canvas = document.getElementById('finPlanChart2');
  if (!canvas) return;
  if (finPlanChart2) { finPlanChart2.destroy(); finPlanChart2 = null; }

  finPlanChart2 = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: FIN_YEARS.map(String),
      datasets: [
        {
          label: 'Emergency Fund',
          data: FIN_EMERG,
          backgroundColor: '#f97316',
          borderRadius: 2
        },
        {
          label: 'MVEP Invest',
          data: FIN_INVEST,
          backgroundColor: '#22c55e',
          borderRadius: 2
        },
        {
          label: 'House Fund',
          data: FIN_HOUSE,
          backgroundColor: '#3b82f6',
          borderRadius: 2
        },
        {
          label: 'Car Fund',
          data: FIN_CAR,
          backgroundColor: '#a855f7',
          borderRadius: 2
        }
      ]
    },
    options: chartOptions({
      plugins: {
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${vnd(ctx.parsed.y)}` } }
      },
      scales: {
        x: {
          stacked: true,
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { display: false }
        },
        y: {
          stacked: true,
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => (v / 1e6).toFixed(0) + 'M'
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}


// 4.15 Accumulation Chart ─────────────────────────────────

function renderAccumChart() {
  const canvas = document.getElementById('accumChart');
  if (!canvas) return;
  if (accumChart) { accumChart.destroy(); accumChart = null; }

  accumChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: FIN_YEARS.map(String),
      datasets: [
        {
          type: 'line',
          label: 'MVEP Accum.',
          data: MVEP_ACCUM,
          borderColor: '#22c55e',
          backgroundColor: '#22c55e22',
          borderWidth: 2.5,
          pointRadius: 4,
          tension: 0.3,
          fill: false,
          yAxisID: 'y',
          order: 0
        },
        {
          type: 'line',
          label: 'Accumulated Savings',
          data: SAVINGS_ACCUM,
          borderColor: '#f97316',
          backgroundColor: '#f9731622',
          borderWidth: 2.5,
          pointRadius: 4,
          tension: 0.3,
          fill: false,
          yAxisID: 'y',
          order: 1
        },
        {
          type: 'bar',
          label: 'Annual contribution',
          data: ANNUAL_CONTRIB,
          backgroundColor: '#38bdf844',
          borderColor: '#38bdf8',
          borderWidth: 1,
          borderRadius: 3,
          yAxisID: 'y',
          order: 2
        }
      ]
    },
    options: chartOptions({
      plugins: {
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${vnd(ctx.parsed.y)}` } }
      },
      scales: {
        x: {
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { display: false }
        },
        y: {
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => {
              if (v >= 1e9) return (v / 1e9).toFixed(1) + 'B';
              return (v / 1e6).toFixed(0) + 'M';
            }
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}


// 4.16 Target Funds ───────────────────────────────────────

function renderCarFundChart() {
  const canvas = document.getElementById('carFundChart');
  if (!canvas) return;
  if (carFundChart) { carFundChart.destroy(); carFundChart = null; }

  const carYears = ['2026', '2027', '2028'];

  // Target line annotation plugin
  const targetPlugin = {
    id: 'carTarget',
    afterDraw(chart) {
      const yScale = chart.scales.y;
      const ctx2 = chart.ctx;
      const yPx = yScale.getPixelForValue(CAR_TARGET);
      ctx2.save();
      ctx2.strokeStyle = '#ef4444';
      ctx2.lineWidth = 2;
      ctx2.setLineDash([6, 4]);
      ctx2.beginPath();
      ctx2.moveTo(chart.chartArea.left, yPx);
      ctx2.lineTo(chart.chartArea.right, yPx);
      ctx2.stroke();
      ctx2.fillStyle = '#ef4444';
      ctx2.font = 'bold 11px sans-serif';
      ctx2.fillText('Mục tiêu: ' + vnd(CAR_TARGET), chart.chartArea.left + 5, yPx - 6);
      ctx2.restore();
    }
  };

  carFundChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: carYears,
      datasets: [{
        label: 'Accumulated vehicle fund',
        data: CAR_FUND,
        backgroundColor: '#a855f7',
        borderRadius: 4,
        borderColor: '#a855f7',
        borderWidth: 1
      }]
    },
    options: chartOptions({
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `Accumulation: ${vnd(ctx.parsed.y)}` } }
      },
      scales: {
        x: {
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { display: false }
        },
        y: {
          max: CAR_TARGET * 1.1,
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => (v / 1e6).toFixed(0) + 'M'
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    }),
    plugins: [targetPlugin]
  });
}

function renderHouseFundChart() {
  const canvas = document.getElementById('houseFundChart');
  if (!canvas) return;
  if (houseFundChart) { houseFundChart.destroy(); houseFundChart = null; }

  const targetPlugin = {
    id: 'houseTarget',
    afterDraw(chart) {
      const yScale = chart.scales.y;
      const ctx2 = chart.ctx;
      const yPx = yScale.getPixelForValue(HOUSE_TARGET);
      ctx2.save();
      ctx2.strokeStyle = '#ef4444';
      ctx2.lineWidth = 2;
      ctx2.setLineDash([6, 4]);
      ctx2.beginPath();
      ctx2.moveTo(chart.chartArea.left, yPx);
      ctx2.lineTo(chart.chartArea.right, yPx);
      ctx2.stroke();
      ctx2.fillStyle = '#ef4444';
      ctx2.font = 'bold 11px sans-serif';
      ctx2.fillText('Mục tiêu: 4 B ₫', chart.chartArea.left + 5, yPx - 6);
      ctx2.restore();
    }
  };

  houseFundChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: FIN_YEARS.map(String),
      datasets: [{
        label: 'Quỹ nhà tích lũy',
        data: HOUSE_FUND,
        backgroundColor: '#3b82f6',
        borderRadius: 4,
        borderColor: '#3b82f6',
        borderWidth: 1
      }]
    },
    options: chartOptions({
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => `Tích lũy: ${vnd(ctx.parsed.y)}` } }
      },
      scales: {
        x: {
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { display: false }
        },
        y: {
          max: HOUSE_TARGET * 1.15,
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => {
              if (v >= 1e9) return (v / 1e9).toFixed(1) + 'B';
              return (v / 1e6).toFixed(0) + 'M';
            }
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    }),
    plugins: [targetPlugin]
  });
}


// 4.17 Monte Carlo Simulation ─────────────────────────────

function boxMullerRandom() {
  let u1 = 0, u2 = 0;
  while (u1 === 0) u1 = Math.random();
  while (u2 === 0) u2 = Math.random();
  return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
}

function runMonteCarlo() {
  const nSim = 2000;
  const nMonths = 120; // 10 years
  const mu = MVEP.ret;        // monthly return of MVEP
  const sigma = MVEP.risk;    // monthly risk of MVEP

  // Monthly investment: FIN_INVEST values, each repeated for 12 months
  const monthlyInvest = [];
  for (let y = 0; y < FIN_INVEST.length; y++) {
    const monthly = FIN_INVEST[y] / 12;
    for (let m = 0; m < 12; m++) {
      monthlyInvest.push(monthly);
    }
  }

  const finalValues = [];
  const savedPaths = [];
  const sumPath = new Float64Array(nMonths + 1);
  const allFinals = [];
  const pathsToSave = 100;

  for (let s = 0; s < nSim; s++) {
    let pv = 0;
    const path = [0];
    for (let m = 0; m < nMonths; m++) {
      const r = mu + sigma * boxMullerRandom();
      pv = pv * (1 + r) + (monthlyInvest[m] || monthlyInvest[monthlyInvest.length - 1]);
      path.push(pv);
      sumPath[m + 1] += pv;
    }
    finalValues.push(pv);
    allFinals.push(pv);
    if (s < pathsToSave) savedPaths.push(path);
  }

  // Mean path
  const meanPath = Array.from(sumPath).map(v => v / nSim);

  // Sort finals for percentiles
  finalValues.sort((a, b) => a - b);
  const p5 = finalValues[Math.floor(nSim * 0.05)];
  const p25 = finalValues[Math.floor(nSim * 0.25)];
  const p50 = finalValues[Math.floor(nSim * 0.50)];
  const p75 = finalValues[Math.floor(nSim * 0.75)];
  const p95 = finalValues[Math.floor(nSim * 0.95)];
  const mean = allFinals.reduce((a, b) => a + b, 0) / nSim;

  // Compute percentile paths by re-running (approximation: collect paths sorted by final)
  const pathsByFinal = savedPaths.slice().sort((a, b) => a[a.length - 1] - b[b.length - 1]);
  const p5Path = pathsByFinal[Math.floor(pathsToSave * 0.05)] || pathsByFinal[0];
  const p25Path = pathsByFinal[Math.floor(pathsToSave * 0.25)] || pathsByFinal[0];
  const p75Path = pathsByFinal[Math.floor(pathsToSave * 0.75)] || pathsByFinal[pathsToSave - 1];
  const p95Path = pathsByFinal[Math.floor(pathsToSave * 0.95)] || pathsByFinal[pathsToSave - 1];

  return { finalValues, allPaths: savedPaths, meanPath, p5Path, p25Path, p75Path, p95Path, p5, p25, p50, p75, p95, mean };
}

function renderMCDistChart(mc) {
  const canvas = document.getElementById('mcDistChart');
  if (!canvas) return;
  if (mcDistChart) { mcDistChart.destroy(); mcDistChart = null; }

  // Histogram
  const vals = mc.finalValues;
  const minV = vals[0];
  const maxV = vals[vals.length - 1];
  const nBins = 30;
  const binWidth = (maxV - minV) / nBins;
  const bins = [];
  const binLabels = [];
  for (let i = 0; i < nBins; i++) {
    bins.push(0);
    const center = minV + binWidth * (i + 0.5);
    binLabels.push((center / 1e9).toFixed(1) + 'B');
  }
  vals.forEach(v => {
    let idx = Math.floor((v - minV) / binWidth);
    if (idx >= nBins) idx = nBins - 1;
    if (idx < 0) idx = 0;
    bins[idx]++;
  });

  // Vertical lines for percentiles
  const annotPlugin = {
    id: 'mcAnnot',
    afterDraw(chart) {
      const ctx2 = chart.ctx;
      const xScale = chart.scales.x;
      const yScale = chart.scales.y;

      const drawLine = (val, label, color) => {
        let binIdx = Math.floor((val - minV) / binWidth);
        if (binIdx >= nBins) binIdx = nBins - 1;
        if (binIdx < 0) binIdx = 0;
        const xPx = xScale.getPixelForValue(binIdx);
        ctx2.save();
        ctx2.strokeStyle = color;
        ctx2.lineWidth = 2;
        ctx2.setLineDash([4, 3]);
        ctx2.beginPath();
        ctx2.moveTo(xPx, chart.chartArea.top);
        ctx2.lineTo(xPx, chart.chartArea.bottom);
        ctx2.stroke();
        ctx2.fillStyle = color;
        ctx2.font = 'bold 10px sans-serif';
        ctx2.fillText(label, xPx + 3, chart.chartArea.top + 12);
        ctx2.restore();
      };

      drawLine(mc.p5, 'P5', '#ef4444');
      drawLine(mc.p50, 'P50', '#f97316');
      drawLine(mc.mean, 'Mean', '#22c55e');
      drawLine(mc.p95, 'P95', '#3b82f6');
    }
  };

  mcDistChart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: binLabels,
      datasets: [{
        label: 'Frequency',
        data: bins,
        backgroundColor: '#38bdf844',
        borderColor: '#38bdf8',
        borderWidth: 1,
        borderRadius: 2
      }]
    },
    options: chartOptions({
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: { label: ctx => `Số kịch bản: ${ctx.parsed.y}` }
        }
      },
      scales: {
        x: {
          ticks: { color: getCSS('--muted', '#94a3b8'), font: { size: 9 }, maxRotation: 45 },
          grid: { display: false },
          title: { display: true, text: 'Price trị cuối (VNĐ)', color: getCSS('--text', '#e2e8f0') }
        },
        y: {
          ticks: { color: getCSS('--muted', '#94a3b8') },
          grid: { color: 'rgba(148,163,184,0.1)' },
          title: { display: true, text: 'Tần suất', color: getCSS('--text', '#e2e8f0') }
        }
      }
    }),
    plugins: [annotPlugin]
  });
}

function renderMCPathsChart(mc) {
  const canvas = document.getElementById('mcPathsChart');
  if (!canvas) return;
  if (mcPathsChart) { mcPathsChart.destroy(); mcPathsChart = null; }

  const labels = [];
  for (let i = 0; i <= 120; i++) labels.push(i);

  // Sort paths by final value for coloring
  const sorted = mc.allPaths.slice().sort((a, b) => a[a.length - 1] - b[b.length - 1]);

  const datasets = sorted.map((path, i) => {
    const frac = i / sorted.length;
    let color;
    if (frac < 0.33) color = `rgba(34,197,94,${0.15 + frac * 0.5})`;     // green = bad
    else if (frac < 0.66) color = `rgba(59,130,246,${0.2 + (frac - 0.33) * 0.5})`; // blue = avg
    else color = `rgba(239,68,68,${0.2 + (frac - 0.66) * 0.8})`;          // red = good
    return {
      data: path,
      borderColor: color,
      borderWidth: 0.8,
      pointRadius: 0,
      tension: 0.2,
      fill: false
    };
  });

  mcPathsChart = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: chartOptions({
      plugins: { legend: { display: false } },
      animation: false,
      scales: {
        x: {
          title: { display: true, text: 'Tháng', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8'), stepSize: 12 },
          grid: { color: 'rgba(148,163,184,0.05)' }
        },
        y: {
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => {
              if (Math.abs(v) >= 1e9) return (v / 1e9).toFixed(1) + 'B';
              if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(0) + 'M';
              return v;
            }
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}

function renderMCExpectedChart(mc) {
  const canvas = document.getElementById('mcExpectedChart');
  if (!canvas) return;
  if (mcExpectedChart) { mcExpectedChart.destroy(); mcExpectedChart = null; }

  const labels = [];
  for (let i = 0; i <= 120; i++) labels.push(i);

  const datasets = [
    // 5-95 band
    {
      label: 'P95',
      data: mc.p95Path,
      borderColor: 'transparent',
      backgroundColor: 'rgba(59,130,246,0.08)',
      fill: '+1',
      pointRadius: 0,
      tension: 0.3
    },
    {
      label: 'P5',
      data: mc.p5Path,
      borderColor: 'rgba(59,130,246,0.3)',
      borderWidth: 1,
      borderDash: [4, 3],
      backgroundColor: 'transparent',
      fill: false,
      pointRadius: 0,
      tension: 0.3
    },
    // 25-75 band
    {
      label: 'P75',
      data: mc.p75Path,
      borderColor: 'transparent',
      backgroundColor: 'rgba(34,197,94,0.12)',
      fill: '+1',
      pointRadius: 0,
      tension: 0.3
    },
    {
      label: 'P25',
      data: mc.p25Path,
      borderColor: 'rgba(34,197,94,0.4)',
      borderWidth: 1,
      borderDash: [4, 3],
      backgroundColor: 'transparent',
      fill: false,
      pointRadius: 0,
      tension: 0.3
    },
    // Mean
    {
      label: 'Mean Path',
      data: mc.meanPath,
      borderColor: '#f97316',
      borderWidth: 2.5,
      backgroundColor: 'transparent',
      fill: false,
      pointRadius: 0,
      tension: 0.3
    }
  ];

  mcExpectedChart = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: chartOptions({
      plugins: {
        legend: {
          labels: { color: getCSS('--text', '#e2e8f0'), usePointStyle: true }
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'Tháng', color: getCSS('--text', '#e2e8f0') },
          ticks: { color: getCSS('--muted', '#94a3b8'), stepSize: 12 },
          grid: { color: 'rgba(148,163,184,0.05)' }
        },
        y: {
          ticks: {
            color: getCSS('--muted', '#94a3b8'),
            callback: v => {
              if (Math.abs(v) >= 1e9) return (v / 1e9).toFixed(1) + 'B';
              if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(0) + 'M';
              return v;
            }
          },
          grid: { color: 'rgba(148,163,184,0.1)' }
        }
      }
    })
  });
}


// 4.18 Market Notes ───────────────────────────────────────

function renderMarketNotes() {
  const el = document.getElementById('marketNotes');
  if (!el) return;

  const notes = [
    {
      icon: '📈',
      title: 'STB has the strongest growth.',
      body: `E(r) = ${pct(EXCEL_STATS.STB.mean, 2)}/month, The price increased from 24,100 to 66,200. (+${pct((66200-24100)/24100, 1)}) in 5 year.`
    },
    {
      icon: '⚠️',
      title: 'VNM has a negative expected return',
      body: `E(r) = ${pct(EXCEL_STATS.VNM.mean, 4)}/month — The only stock with a negative expected return in the portfolio.`
    },
    {
      icon: '🔗',
      title: 'DCM–GMD has the highest correlation.',
      body: `Correlation coefficient = 0.5818 — diversification between these two stocks is less effective than other pairs.`
    },
    {
      icon: '🏆',
      title: 'STB–DCM–GMD: Optimal Sharpe',
      body: `The MVEP portfolio achieved a Sharpe ratio = ${MVEP.sharpe.toFixed(4)}, The highest among the 10 three-stock combinations.`
    },
    {
      icon: '💰',
      title: '10-year financial plan',
      body: `MVEP Accum. Expected ~${(MVEP_ACCUM[9]/1e9).toFixed(1)} B ₫ ando 2035, exceeding savings ~${((MVEP_ACCUM[9] - SAVINGS_ACCUM[9])/1e9).toFixed(1)} B ₫.`
    }
  ];

  let html = '';
  notes.forEach(n => {
    html += `<div class="note-card">
      <div class="note-icon">${n.icon}</div>
      <div class="note-content">
        <h4>${n.title}</h4>
        <p>${n.body}</p>
      </div>
    </div>`;
  });
  el.innerHTML = html;
}


// 4.19 Order Demo ─────────────────────────────────────────

function renderOrderForm() {
  const tickerSel = document.getElementById('orderTicker');
  if (tickerSel) {
    tickerSel.innerHTML = TICKERS.map(t => `<option value="${t}">${t} — ${SECTORS[t]}</option>`).join('');
    tickerSel.addEventListener('change', updateOrderDefaults);
    updateOrderDefaults();
  }

  const qtyEl = document.getElementById('orderQty');
  const priceEl = document.getElementById('orderPrice');
  if (qtyEl) qtyEl.addEventListener('input', updateOrderValue);
  if (priceEl) priceEl.addEventListener('input', updateOrderValue);

  renderOrderLog();
}

function updateOrderDefaults() {
  const tickerSel = document.getElementById('orderTicker');
  const priceEl = document.getElementById('orderPrice');
  if (!tickerSel || !priceEl) return;
  const t = tickerSel.value;
  priceEl.value = latest()[t];
  updateOrderValue();
}

function updateOrderValue() {
  const qty = parseFloat(document.getElementById('orderQty')?.value || 0);
  const price = parseFloat(document.getElementById('orderPrice')?.value || 0);
  const valEl = document.getElementById('orderValue');
  if (valEl) valEl.textContent = vnd(qty * price);
}

function placeDemoOrder() {
  const ticker = document.getElementById('orderTicker')?.value;
  const side = document.getElementById('orderSide')?.value || 'MUA';
  const qty = parseInt(document.getElementById('orderQty')?.value || 0);
  const price = parseFloat(document.getElementById('orderPrice')?.value || 0);

  if (!ticker || qty <= 0 || price <= 0) {
    alert('Vui lòng nhập đủ thông tin lệnh.');
    return;
  }

  const order = {
    id: Date.now(),
    time: new Date().toLocaleString('vi-VN'),
    ticker,
    side,
    qty,
    price,
    value: qty * price,
    status: 'Khớp (Demo)'
  };
  orderLog.unshift(order);
  localStorage.setItem('demoOrders', JSON.stringify(orderLog));
  renderOrderLog();
}

function renderOrderLog() {
  const el = document.getElementById('orderLog');
  if (!el) return;
  if (orderLog.length === 0) {
    el.innerHTML = '<p style="color:var(--muted,#94a3b8);text-align:center">Chưa có lệnh nào.</p>';
    return;
  }
  let html = `<table class="data-table"><thead><tr>
    <th>Thời gian</th><th>Mã</th><th>Lệnh</th><th>KL</th><th>Price</th><th>Price trị</th><th>Trạng thái</th>
  </tr></thead><tbody>`;
  orderLog.forEach(o => {
    const cls = o.side === 'MUA' ? 'up' : 'down';
    html += `<tr>
      <td>${o.time}</td>
      <td style="font-weight:600;color:${COLORS_MAP[o.ticker] || '#e2e8f0'}">${o.ticker}</td>
      <td class="${cls}">${o.side}</td>
      <td>${money.format(o.qty)}</td>
      <td>${money.format(o.price)}</td>
      <td>${vnd(o.value)}</td>
      <td>${o.status}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}


// 4.20 Export Report ──────────────────────────────────────

function exportReport() {
  const el = document.getElementById('reportText');
  if (!el) return;

  const l = latest();
  let txt = '═══════════════════════════════════════════════\n';
  txt += '  BÁO CÁO QUẢN TRỊ DANH MỤC ĐẦU TƯ\n';
  txt += '  Dữ liệu: 05/2021 – 05/2026 (60 month)\n';
  txt += '═══════════════════════════════════════════════\n\n';

  txt += '1. THỐNG KÊ CỔ PHIẾU\n';
  txt += '─────────────────────────────────────────\n';
  TICKERS.forEach(t => {
    const s = EXCEL_STATS[t];
    txt += `  ${t} (${SECTORS[t]})\n`;
    txt += `    Price hiện tại: ${money.format(l[t])} ₫\n`;
    txt += `    E(r)/month: ${pct(s.mean, 4)}   σ: ${pct(s.std, 4)}   Var: ${num(s.variance, 6)}\n`;
    txt += `    Beta: ${beta(t).toFixed(4)}   Max DD: ${pct(maxDrawdown(t), 2)}\n\n`;
  });

  txt += '2. PORTFOLIO TỐI ƯU (MVEP)\n';
  txt += '─────────────────────────────────────────\n';
  txt += `  Tổ hợp: STB–DCM–GMD\n`;
  txt += `  Weights: STB ${pct(MVEP.weights[0])}, DCM ${pct(MVEP.weights[1])}, GMD ${pct(MVEP.weights[2])}\n`;
  txt += `  E(rp) = ${pct(MVEP.ret, 4)}   σp = ${pct(MVEP.risk, 4)}   Sharpe = ${MVEP.sharpe.toFixed(4)}\n\n`;

  txt += '3. COMPLETE PORTFOLIO\n';
  txt += '─────────────────────────────────────────\n';
  txt += `  y* = ${pct(Y_STAR, 0)}   (1-y*) = ${pct(1 - Y_STAR, 0)}\n`;
  txt += `  E(rc) = ${pct(E_RC, 4)}   σc = ${pct(SIGMA_C, 4)}\n`;
  txt += `  Utility = ${num(U_OPT, 6)}\n\n`;

  txt += '4. THÔNG SỐ\n';
  txt += '─────────────────────────────────────────\n';
  txt += `  Rf = ${pct(RF_MONTHLY, 4)}/month (${pct(RF_MONTHLY * 12, 2)}/year)\n`;
  txt += `  Risk Aversion A = ${RISK_AVERSION_A}\n\n`;

  txt += '5. 10 TỔ HỢP SOLVER\n';
  txt += '─────────────────────────────────────────\n';
  SOLVER_COMBOS.forEach((c, i) => {
    txt += `  ${i + 1}. ${c.name.padEnd(16)} Sharpe=${c.sharpe.toFixed(4)}  E(r)=${pct(c.ret, 4)}  σ=${pct(c.risk, 4)}\n`;
  });
  txt += '\n';

  txt += '6. KẾ HOẠCH TÀI CHÍNH 10 NĂM\n';
  txt += '─────────────────────────────────────────\n';
  FIN_YEARS.forEach((y, i) => {
    txt += `  ${y}: Income ${vnd(FIN_INCOME[i])} | Chi ${vnd(FIN_EXPENSE[i])} | Net ${vnd(FIN_NET_CF[i])}\n`;
  });
  txt += `\n  MVEP Accum. 2035: ${vnd(MVEP_ACCUM[9])}\n`;
  txt += `  Tích lũy Tiết kiệm 2035: ${vnd(SAVINGS_ACCUM[9])}\n`;

  el.value = txt;
}


// ────────────────────────────────────────────────────────────
// SECTION 6: INIT & EVENT BINDING
// ────────────────────────────────────────────────────────────

function bindEvents() {
  // Chart mode buttons
  document.querySelectorAll('[data-chart-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      chartMode = btn.dataset.chartMode;
      document.querySelectorAll('[data-chart-mode]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMainChart();
    });
  });

  // Matrix toggle
  document.querySelectorAll('[data-matrix]').forEach(btn => {
    btn.addEventListener('click', () => {
      matrixMode = btn.dataset.matrix;
      document.querySelectorAll('[data-matrix]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMatrix();
    });
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light');
      // Re-render all charts to pick up new CSS vars
      renderAllCharts();
    });
  }

  // Capital input
  const capInput = document.getElementById('capitalInput');
  if (capInput) {
    capInput.addEventListener('input', () => {
      renderAllocationTable();
    });
  }

  // Manual calc button
  const manualBtn = document.getElementById('manualCalcBtn');
  if (manualBtn) {
    manualBtn.addEventListener('click', compareManual);
  }

  // Place order
  const placeBtn = document.getElementById('placeOrderBtn');
  if (placeBtn) {
    placeBtn.addEventListener('click', placeDemoOrder);
  }

  // Export button
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportReport();
      const reportEl = document.getElementById('reportText');
      if (reportEl) {
        reportEl.select();
        try { document.execCommand('copy'); } catch (e) { /* ignore */ }
        alert('Đã copy báo cáo!');
      }
    });
  }
}

function renderAllCharts() {
  renderHeaderCards();
  renderTickerTape();
  renderWatchlist();
  renderStockDetail();
  renderMainChart();
  renderPriceBoard();
  renderStatsTable();
  renderRiskReturnChart();
  renderMatrix();
  renderSolverTable();
  renderBestBox();
  renderSharpeBarChart();
  renderPieChart();
  renderAllocation();
  renderManualInputs();
  renderFrontierChart();
  renderFrontierSummary();
  renderCPCompareChart();
  renderFinPlanChart();
  renderCashFlowAllocation();
  renderAccumChart();
  renderCarFundChart();
  renderHouseFundChart();
  const mc = runMonteCarlo();
  renderMCDistChart(mc);
  renderMCPathsChart(mc);
  renderMCExpectedChart(mc);
  renderMarketNotes();
  renderOrderForm();
  exportReport();
}

function init() {
  bindEvents();
  renderHeaderCards();
  renderTickerTape();
  renderWatchlist();
  renderStockDetail();
  renderMainChart();
  renderPriceBoard();
  renderStatsTable();
  renderRiskReturnChart();
  renderMatrix();
  renderSolverTable();
  renderBestBox();
  renderSharpeBarChart();
  renderPieChart();
  renderAllocation();
  renderManualInputs();
  renderFrontierChart();
  renderFrontierSummary();
  renderCPCompareChart();
  renderFinPlanChart();
  renderCashFlowAllocation();
  renderAccumChart();
  renderCarFundChart();
  renderHouseFundChart();
  const mc = runMonteCarlo();
  renderMCDistChart(mc);
  renderMCPathsChart(mc);
  renderMCExpectedChart(mc);
  renderMarketNotes();
  renderOrderForm();
  exportReport();
}

document.addEventListener('DOMContentLoaded', init);
