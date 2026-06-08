const TICKERS = ["STB", "VNM", "DCM", "FPT", "GMD"];

const SECTORS = {
  STB: "Ngân hàng",
  VNM: "Tiêu dùng thiết yếu",
  DCM: "Vật liệu / Phân bón",
  FPT: "Công nghệ",
  GMD: "Logistics"
};

const PRICE_DATA = [
  {
    "date": "2021-05-04",
    "STB": 24100.0,
    "VNM": 69685.0,
    "DCM": 11749.0,
    "FPT": 35345.0,
    "GMD": 24608.0
  },
  {
    "date": "2021-06-01",
    "STB": 32400.0,
    "VNM": 68391.0,
    "DCM": 12303.0,
    "FPT": 43147.0,
    "GMD": 26982.0
  },
  {
    "date": "2021-07-01",
    "STB": 31000.0,
    "VNM": 70013.0,
    "DCM": 15259.0,
    "FPT": 44039.0,
    "GMD": 32163.0
  },
  {
    "date": "2021-08-02",
    "STB": 29300.0,
    "VNM": 79065.0,
    "DCM": 15893.0,
    "FPT": 47358.0,
    "GMD": 34034.0
  },
  {
    "date": "2021-09-01",
    "STB": 27200.0,
    "VNM": 67856.0,
    "DCM": 20060.0,
    "FPT": 46260.0,
    "GMD": 39107.0
  },
  {
    "date": "2021-10-01",
    "STB": 24700.0,
    "VNM": 70361.0,
    "DCM": 21757.0,
    "FPT": 46510.0,
    "GMD": 35934.0
  },
  {
    "date": "2021-11-01",
    "STB": 26600.0,
    "VNM": 70517.0,
    "DCM": 26232.0,
    "FPT": 47962.0,
    "GMD": 38074.0
  },
  {
    "date": "2021-12-01",
    "STB": 29900.0,
    "VNM": 68558.0,
    "DCM": 31054.0,
    "FPT": 49164.0,
    "GMD": 36598.0
  },
  {
    "date": "2022-01-04",
    "STB": 32100.0,
    "VNM": 67932.0,
    "DCM": 28624.0,
    "FPT": 46811.0,
    "GMD": 34975.0
  },
  {
    "date": "2022-02-07",
    "STB": 35600.0,
    "VNM": 66517.0,
    "DCM": 21603.0,
    "FPT": 44808.0,
    "GMD": 33942.0
  },
  {
    "date": "2022-03-01",
    "STB": 32650.0,
    "VNM": 63092.0,
    "DCM": 28470.0,
    "FPT": 46760.0,
    "GMD": 36893.0
  },
  {
    "date": "2022-04-01",
    "STB": 32200.0,
    "VNM": 65083.0,
    "DCM": 34025.0,
    "FPT": 55572.0,
    "GMD": 42796.0
  },
  {
    "date": "2022-05-04",
    "STB": 26750.0,
    "VNM": 57754.0,
    "DCM": 27737.0,
    "FPT": 52318.0,
    "GMD": 41689.0
  },
  {
    "date": "2022-06-01",
    "STB": 22250.0,
    "VNM": 57277.0,
    "DCM": 30244.0,
    "FPT": 55972.0,
    "GMD": 43165.0
  },
  {
    "date": "2022-07-01",
    "STB": 22000.0,
    "VNM": 58710.0,
    "DCM": 24303.0,
    "FPT": 53353.0,
    "GMD": 37926.0
  },
  {
    "date": "2022-08-01",
    "STB": 25200.0,
    "VNM": 60582.0,
    "DCM": 24566.0,
    "FPT": 50928.0,
    "GMD": 38738.0
  },
  {
    "date": "2022-09-05",
    "STB": 24700.0,
    "VNM": 63879.0,
    "DCM": 31352.0,
    "FPT": 52870.0,
    "GMD": 37705.0
  },
  {
    "date": "2022-10-03",
    "STB": 19200.0,
    "VNM": 58521.0,
    "DCM": 25629.0,
    "FPT": 47227.0,
    "GMD": 35012.0
  },
  {
    "date": "2022-11-01",
    "STB": 16900.0,
    "VNM": 66104.0,
    "DCM": 26406.0,
    "FPT": 46307.0,
    "GMD": 34983.0
  },
  {
    "date": "2022-12-01",
    "STB": 19500.0,
    "VNM": 67917.0,
    "DCM": 22727.0,
    "FPT": 45816.0,
    "GMD": 35021.0
  },
  {
    "date": "2023-01-03",
    "STB": 23500.0,
    "VNM": 65860.0,
    "DCM": 22277.0,
    "FPT": 49067.0,
    "GMD": 34794.0
  },
  {
    "date": "2023-02-01",
    "STB": 25650.0,
    "VNM": 64769.0,
    "DCM": 21787.0,
    "FPT": 50294.0,
    "GMD": 38954.0
  },
  {
    "date": "2023-03-01",
    "STB": 25400.0,
    "VNM": 64517.0,
    "DCM": 19293.0,
    "FPT": 49374.0,
    "GMD": 38198.0
  },
  {
    "date": "2023-04-03",
    "STB": 26750.0,
    "VNM": 62420.0,
    "DCM": 19661.0,
    "FPT": 49619.0,
    "GMD": 39635.0
  },
  {
    "date": "2023-05-04",
    "STB": 25150.0,
    "VNM": 57554.0,
    "DCM": 19089.0,
    "FPT": 48147.0,
    "GMD": 38349.0
  },
  {
    "date": "2023-06-01",
    "STB": 28000.0,
    "VNM": 55456.0,
    "DCM": 19702.0,
    "FPT": 51214.0,
    "GMD": 38576.0
  },
  {
    "date": "2023-07-03",
    "STB": 29700.0,
    "VNM": 59316.0,
    "DCM": 22277.0,
    "FPT": 52992.0,
    "GMD": 39786.0
  },
  {
    "date": "2023-08-01",
    "STB": 28950.0,
    "VNM": 63762.0,
    "DCM": 25915.0,
    "FPT": 60294.0,
    "GMD": 43190.0
  },
  {
    "date": "2023-09-05",
    "STB": 32700.0,
    "VNM": 69438.0,
    "DCM": 28370.0,
    "FPT": 69879.0,
    "GMD": 48106.0
  },
  {
    "date": "2023-10-02",
    "STB": 30850.0,
    "VNM": 65537.0,
    "DCM": 30253.0,
    "FPT": 67280.0,
    "GMD": 50933.0
  },
  {
    "date": "2023-11-01",
    "STB": 27650.0,
    "VNM": 61029.0,
    "DCM": 25099.0,
    "FPT": 61649.0,
    "GMD": 48203.0
  },
  {
    "date": "2023-12-01",
    "STB": 27500.0,
    "VNM": 59295.0,
    "DCM": 28684.0,
    "FPT": 66702.0,
    "GMD": 54755.0
  },
  {
    "date": "2024-01-02",
    "STB": 27750.0,
    "VNM": 59647.0,
    "DCM": 28998.0,
    "FPT": 69229.0,
    "GMD": 55925.0
  },
  {
    "date": "2024-02-01",
    "STB": 29800.0,
    "VNM": 58948.0,
    "DCM": 28953.0,
    "FPT": 72117.0,
    "GMD": 53819.0
  },
  {
    "date": "2024-03-01",
    "STB": 31950.0,
    "VNM": 62441.0,
    "DCM": 30656.0,
    "FPT": 79985.0,
    "GMD": 62789.0
  },
  {
    "date": "2024-04-01",
    "STB": 31400.0,
    "VNM": 59268.0,
    "DCM": 30970.0,
    "FPT": 84317.0,
    "GMD": 62009.0
  },
  {
    "date": "2024-05-02",
    "STB": 27600.0,
    "VNM": 57853.0,
    "DCM": 28729.0,
    "FPT": 91897.0,
    "GMD": 65675.0
  },
  {
    "date": "2024-06-03",
    "STB": 29750.0,
    "VNM": 58472.0,
    "DCM": 34869.0,
    "FPT": 98827.0,
    "GMD": 64973.0
  },
  {
    "date": "2024-07-01",
    "STB": 29300.0,
    "VNM": 58384.0,
    "DCM": 34569.0,
    "FPT": 107494.0,
    "GMD": 63959.0
  },
  {
    "date": "2024-08-01",
    "STB": 28050.0,
    "VNM": 62187.0,
    "DCM": 33672.0,
    "FPT": 104318.0,
    "GMD": 63196.0
  },
  {
    "date": "2024-09-04",
    "STB": 30100.0,
    "VNM": 65726.0,
    "DCM": 34994.0,
    "FPT": 111172.0,
    "GMD": 63277.0
  },
  {
    "date": "2024-10-01",
    "STB": 33500.0,
    "VNM": 64167.0,
    "DCM": 36127.0,
    "FPT": 113596.0,
    "GMD": 61995.0
  },
  {
    "date": "2024-11-01",
    "STB": 35000.0,
    "VNM": 60231.0,
    "DCM": 34805.0,
    "FPT": 112509.0,
    "GMD": 60377.0
  },
  {
    "date": "2024-12-02",
    "STB": 33100.0,
    "VNM": 59041.0,
    "DCM": 34994.0,
    "FPT": 119692.0,
    "GMD": 60471.0
  },
  {
    "date": "2025-01-02",
    "STB": 37000.0,
    "VNM": 58211.0,
    "DCM": 33672.0,
    "FPT": 127940.0,
    "GMD": 62258.0
  },
  {
    "date": "2025-02-03",
    "STB": 36550.0,
    "VNM": 55813.0,
    "DCM": 32066.0,
    "FPT": 122469.0,
    "GMD": 58966.0
  },
  {
    "date": "2025-03-03",
    "STB": 38850.0,
    "VNM": 58304.0,
    "DCM": 33530.0,
    "FPT": 118261.0,
    "GMD": 57180.0
  },
  {
    "date": "2025-04-01",
    "STB": 39700.0,
    "VNM": 56089.0,
    "DCM": 31263.0,
    "FPT": 101426.0,
    "GMD": 54170.0
  },
  {
    "date": "2025-05-05",
    "STB": 39500.0,
    "VNM": 52492.0,
    "DCM": 32019.0,
    "FPT": 91410.0,
    "GMD": 51255.0
  },
  {
    "date": "2025-06-02",
    "STB": 41800.0,
    "VNM": 52153.0,
    "DCM": 31877.0,
    "FPT": 97723.0,
    "GMD": 55017.0
  },
  {
    "date": "2025-07-01",
    "STB": 46950.0,
    "VNM": 54923.0,
    "DCM": 33450.0,
    "FPT": 100851.0,
    "GMD": 54076.0
  },
  {
    "date": "2025-08-01",
    "STB": 49400.0,
    "VNM": 57311.0,
    "DCM": 35750.0,
    "FPT": 104459.0,
    "GMD": 54418.0
  },
  {
    "date": "2025-09-03",
    "STB": 56300.0,
    "VNM": 58744.0,
    "DCM": 39650.0,
    "FPT": 100749.0,
    "GMD": 65496.0
  },
  {
    "date": "2025-10-01",
    "STB": 59800.0,
    "VNM": 59317.0,
    "DCM": 36600.0,
    "FPT": 91182.0,
    "GMD": 64621.0
  },
  {
    "date": "2025-11-03",
    "STB": 52300.0,
    "VNM": 57300.0,
    "DCM": 34550.0,
    "FPT": 102506.0,
    "GMD": 66565.0
  },
  {
    "date": "2025-12-01",
    "STB": 49000.0,
    "VNM": 64900.0,
    "DCM": 33700.0,
    "FPT": 95287.0,
    "GMD": 61706.0
  },
  {
    "date": "2026-01-05",
    "STB": 57900.0,
    "VNM": 60300.0,
    "DCM": 33350.0,
    "FPT": 93709.0,
    "GMD": 58888.0
  },
  {
    "date": "2026-02-02",
    "STB": 63500.0,
    "VNM": 72600.0,
    "DCM": 37850.0,
    "FPT": 102882.0,
    "GMD": 66273.0
  },
  {
    "date": "2026-03-02",
    "STB": 67000.0,
    "VNM": 66600.0,
    "DCM": 45950.0,
    "FPT": 88382.0,
    "GMD": 78712.0
  },
  {
    "date": "2026-04-01",
    "STB": 62200.0,
    "VNM": 61300.0,
    "DCM": 45300.0,
    "FPT": 74276.0,
    "GMD": 75214.0
  },
  {
    "date": "2026-05-04",
    "STB": 66200.0,
    "VNM": 60900.0,
    "DCM": 42050.0,
    "FPT": 72698.0,
    "GMD": 72979.0
  }
];

let selectedTicker = "STB";
let chartMode = "price";
let mainChart, allocationChart, riskReturnChart;
let bestPortfolio = null;
let orderLog = JSON.parse(localStorage.getItem("demoOrders") || "[]");

const money = new Intl.NumberFormat("vi-VN");

function pct(x, digits = 2) {
  if (!Number.isFinite(x)) return "--";
  return (x * 100).toFixed(digits) + "%";
}
function num(x, digits = 3) { return Number.isFinite(x) ? x.toFixed(digits) : "--"; }
function vnd(x) { return Number.isFinite(x) ? money.format(Math.round(x)) + " đ" : "--"; }
function latest() { return PRICE_DATA[PRICE_DATA.length - 1]; }
function previous() { return PRICE_DATA[PRICE_DATA.length - 2]; }
function priceSeries(ticker) { return PRICE_DATA.map(d => d[ticker]); }
function returnsSeries(ticker) {
  const p = priceSeries(ticker);
  const r = [];
  for (let i = 1; i < p.length; i++) r.push(p[i] / p[i - 1] - 1);
  return r;
}
function mean(arr) { return arr.reduce((s, x) => s + x, 0) / arr.length; }
function variance(arr) {
  const m = mean(arr);
  return arr.reduce((s, x) => s + Math.pow(x - m, 2), 0) / (arr.length - 1);
}
function stdev(arr) { return Math.sqrt(variance(arr)); }
function covariance(a, b) {
  const ma = mean(a), mb = mean(b);
  let s = 0;
  for (let i = 0; i < a.length; i++) s += (a[i] - ma) * (b[i] - mb);
  return s / (a.length - 1);
}
function correlation(a, b) { return covariance(a, b) / (stdev(a) * stdev(b)); }
function normalizedSeries(ticker) {
  const p = priceSeries(ticker);
  return p.map(x => (x / p[0]) * 100);
}
function movingAverage(arr, window = 6) {
  return arr.map((_, i) => {
    if (i < window - 1) return null;
    const slice = arr.slice(i - window + 1, i + 1);
    return mean(slice);
  });
}
function pmIndexSeries() {
  return PRICE_DATA.map((_, i) => mean(TICKERS.map(t => normalizedSeries(t)[i])));
}
function pmIndexReturns() {
  const idx = pmIndexSeries();
  const r = [];
  for (let i = 1; i < idx.length; i++) r.push(idx[i] / idx[i - 1] - 1);
  return r;
}
function beta(ticker) {
  const r = returnsSeries(ticker);
  const m = pmIndexReturns();
  return covariance(r, m) / variance(m);
}
function maxDrawdown(ticker) {
  const p = priceSeries(ticker);
  let peak = p[0], maxDD = 0;
  for (const value of p) {
    peak = Math.max(peak, value);
    maxDD = Math.min(maxDD, value / peak - 1);
  }
  return maxDD;
}
function latestChange(ticker) {
  const last = latest()[ticker];
  const prev = previous()[ticker];
  return { diff: last - prev, rate: last / prev - 1 };
}
function signalFor(ticker) {
  const m = mean(returnsSeries(ticker));
  const b = beta(ticker);
  const dd = maxDrawdown(ticker);
  if (m > 0.015 && b < 1.15 && dd > -0.45) return "Quality";
  if (m > 0.01) return "Growth";
  if (b > 1.25) return "High Beta";
  return "Defensive";
}
function covarianceMatrix() {
  return TICKERS.map(a => TICKERS.map(b => covariance(returnsSeries(a), returnsSeries(b))));
}
function correlationMatrix() {
  return TICKERS.map(a => TICKERS.map(b => correlation(returnsSeries(a), returnsSeries(b))));
}
function annualRf() { return Number(document.getElementById("rfInput").value || 0) / 100; }
function monthlyRf() { return Math.pow(1 + annualRf(), 1 / 12) - 1; }
function calculatePortfolio(tickerList, weights) {
  const returns = tickerList.map(t => mean(returnsSeries(t)));
  const risks = tickerList.map(t => stdev(returnsSeries(t)));
  const portfolioReturn = weights.reduce((s, w, i) => s + w * returns[i], 0);
  let varianceP = 0;
  for (let i = 0; i < tickerList.length; i++) {
    for (let j = 0; j < tickerList.length; j++) {
      const cov = covariance(returnsSeries(tickerList[i]), returnsSeries(tickerList[j]));
      varianceP += weights[i] * weights[j] * cov;
    }
  }
  const portfolioRisk = Math.sqrt(Math.max(varianceP, 0));
  const sharpe = (portfolioReturn - monthlyRf()) / portfolioRisk;
  const portfolioBeta = weights.reduce((s, w, i) => s + w * beta(tickerList[i]), 0);
  return { portfolioReturn, portfolioRisk, sharpe, portfolioBeta, returns, risks };
}
function combinations(arr, k) {
  const out = [];
  function rec(start, combo) {
    if (combo.length === k) { out.push([...combo]); return; }
    for (let i = start; i < arr.length; i++) { combo.push(arr[i]); rec(i + 1, combo); combo.pop(); }
  }
  rec(0, []);
  return out;
}
function generateWeightSets(minW, maxW, step) {
  const sets = [];
  for (let a = minW; a <= maxW; a += step) {
    for (let b = minW; b <= maxW; b += step) {
      const c = 1 - a - b;
      if (c >= minW - 1e-9 && c <= maxW + 1e-9) sets.push([a, b, c]);
    }
  }
  return sets;
}
function runOptimization() {
  const minW = Number(document.getElementById("minWeight").value) / 100;
  const maxW = Number(document.getElementById("maxWeight").value) / 100;
  const step = Number(document.getElementById("stepWeight").value) / 100;
  const combos = combinations(TICKERS, 3);
  const weightSets = generateWeightSets(minW, maxW, step);
  let rows = [];
  bestPortfolio = null;
  for (const combo of combos) {
    let bestForCombo = null;
    for (const weights of weightSets) {
      const result = calculatePortfolio(combo, weights);
      if (!bestForCombo || result.sharpe > bestForCombo.sharpe) {
        bestForCombo = { tickers: combo, weights, ...result };
      }
    }
    rows.push(bestForCombo);
    if (!bestPortfolio || bestForCombo.sharpe > bestPortfolio.sharpe) bestPortfolio = bestForCombo;
  }
  rows.sort((a, b) => b.sharpe - a.sharpe);
  renderOptimalTable(rows);
  renderBestBox();
  renderAllocation();
  compareManual();
  updateHeaderCards();
}
function renderHeaderCards() { updateHeaderCards(); }
function updateHeaderCards() {
  const idx = pmIndexSeries();
  const lastIdx = idx[idx.length - 1];
  const prevIdx = idx[idx.length - 2];
  const change = lastIdx / prevIdx - 1;
  document.getElementById("pmIndex").textContent = num(lastIdx, 2);
  const pmChange = document.getElementById("pmIndexChange");
  pmChange.textContent = `${change >= 0 ? "+" : ""}${pct(change)} last month`;
  pmChange.className = change > 0 ? "up" : change < 0 ? "down" : "flat";
  document.getElementById("bestSharpeCard").textContent = bestPortfolio ? num(bestPortfolio.sharpe, 3) : "--";
  document.getElementById("bestComboCard").textContent = bestPortfolio ? bestPortfolio.tickers.join(" · ") : "Run optimization";
}
function renderTickerTape() {
  const items = TICKERS.map(t => {
    const ch = latestChange(t);
    const cls = ch.rate > 0 ? "up" : ch.rate < 0 ? "down" : "flat";
    return `<span class="tape-item"><b>${t}</b> <span>${vnd(latest()[t])}</span> <span class="${cls}">${ch.rate >= 0 ? "+" : ""}${pct(ch.rate)}</span></span>`;
  }).join("");
  document.getElementById("tickerTape").innerHTML = `<div class="ticker-track">${items}${items}</div>`;
}
function renderWatchlist() {
  const el = document.getElementById("watchlist");
  el.innerHTML = TICKERS.map(t => {
    const ch = latestChange(t);
    const cls = ch.rate > 0 ? "up" : ch.rate < 0 ? "down" : "flat";
    return `<div class="watch-item ${t === selectedTicker ? "active" : ""}" data-ticker="${t}">
      <div class="watch-top"><div><div class="watch-code">${t}</div><div class="watch-sector">${SECTORS[t]}</div></div><div class="watch-price">${vnd(latest()[t])}</div></div>
      <div class="watch-bottom"><span>β ${num(beta(t), 2)}</span><span class="watch-change ${cls}">${ch.rate >= 0 ? "+" : ""}${pct(ch.rate)}</span></div>
    </div>`;
  }).join("");
  document.querySelectorAll(".watch-item").forEach(item => item.addEventListener("click", () => {
    selectedTicker = item.dataset.ticker;
    renderAllSelected();
  }));
}
function renderPriceBoard() {
  const body = document.getElementById("priceBoard");
  body.innerHTML = TICKERS.map(t => {
    const ch = latestChange(t);
    const cls = ch.rate > 0 ? "up" : ch.rate < 0 ? "down" : "flat";
    return `<tr data-ticker="${t}">
      <td class="ticker-cell">${t}</td>
      <td>${SECTORS[t]}</td>
      <td>${vnd(latest()[t])}</td>
      <td class="${cls}">${ch.diff >= 0 ? "+" : ""}${money.format(Math.round(ch.diff))}</td>
      <td class="${cls}">${ch.rate >= 0 ? "+" : ""}${pct(ch.rate)}</td>
      <td>${pct(mean(returnsSeries(t)))}</td>
      <td>${pct(stdev(returnsSeries(t)))}</td>
      <td>${num(beta(t), 2)}</td>
      <td><span class="pill">${signalFor(t)}</span></td>
    </tr>`;
  }).join("");
  body.querySelectorAll("tr").forEach(row => row.addEventListener("click", () => { selectedTicker = row.dataset.ticker; renderAllSelected(); }));
}
function renderStockDetail() {
  const ch = latestChange(selectedTicker);
  const cls = ch.rate > 0 ? "up" : ch.rate < 0 ? "down" : "flat";
  document.getElementById("selectedTicker").textContent = selectedTicker;
  document.getElementById("selectedSector").textContent = SECTORS[selectedTicker];
  document.getElementById("selectedSignal").textContent = signalFor(selectedTicker);
  document.getElementById("selectedPrice").textContent = vnd(latest()[selectedTicker]);
  document.getElementById("selectedChange").textContent = `${ch.diff >= 0 ? "+" : ""}${money.format(Math.round(ch.diff))} / ${ch.rate >= 0 ? "+" : ""}${pct(ch.rate)}`;
  document.getElementById("selectedChange").className = cls;
  document.getElementById("selectedMean").textContent = pct(mean(returnsSeries(selectedTicker)));
  document.getElementById("selectedRisk").textContent = pct(stdev(returnsSeries(selectedTicker)));
  document.getElementById("selectedBeta").textContent = num(beta(selectedTicker), 2);
  document.getElementById("selectedAnnual").textContent = pct(Math.pow(1 + mean(returnsSeries(selectedTicker)), 12) - 1);
  document.getElementById("selectedDrawdown").textContent = pct(maxDrawdown(selectedTicker));
}
function chartLabels() { return PRICE_DATA.map(d => d.date.slice(0, 7)); }
function makeMainDataset() {
  if (chartMode === "price") {
    const p = priceSeries(selectedTicker);
    return { labels: chartLabels(), values: p, ma: movingAverage(p), label: `${selectedTicker} Price`, subtitle: "Monthly close price" };
  }
  if (chartMode === "normalized") {
    const n = normalizedSeries(selectedTicker);
    return { labels: chartLabels(), values: n, ma: movingAverage(n), label: `${selectedTicker} Index 100`, subtitle: "Normalized start value = 100" };
  }
  const r = [null, ...returnsSeries(selectedTicker).map(x => x * 100)];
  return { labels: chartLabels(), values: r, ma: movingAverage(r.filter(x => x !== null)), label: `${selectedTicker} Monthly Return (%)`, subtitle: "Monthly return (%)" };
}
function renderMainChart() {
  const ds = makeMainDataset();
  document.getElementById("chartTitle").textContent = `${selectedTicker} Chart`;
  document.getElementById("chartSubtitle").textContent = ds.subtitle;
  const ctx = document.getElementById("mainChart");
  const datasets = [{ label: ds.label, data: ds.values, borderWidth: 2.6, tension: .35, pointRadius: 0 }];
  if (chartMode !== "returns") datasets.push({ label: "MA 6M", data: ds.ma, borderWidth: 1.6, borderDash: [7, 5], tension: .35, pointRadius: 0 });
  if (mainChart) mainChart.destroy();
  mainChart = new Chart(ctx, {
    type: "line",
    data: { labels: ds.labels, datasets },
    options: chartOptions()
  });
}
function chartOptions() {
  const color = getComputedStyle(document.body).getPropertyValue("--text").trim();
  const muted = getComputedStyle(document.body).getPropertyValue("--muted").trim();
  return {
    responsive:true, maintainAspectRatio:false,
    interaction: { mode:"index", intersect:false },
    plugins: { legend: { labels: { color } } },
    scales: { x: { ticks: { color: muted, maxTicksLimit: 10 }, grid: { color:"rgba(148,163,184,.10)" } }, y: { ticks: { color: muted }, grid: { color:"rgba(148,163,184,.10)" } } }
  };
}
function renderRiskReturnChart() {
  if (riskReturnChart) riskReturnChart.destroy();
  riskReturnChart = new Chart(document.getElementById("riskReturnChart"), {
    type:"scatter",
    data: { datasets: [{ label:"Stocks", data: TICKERS.map(t => ({ x: stdev(returnsSeries(t))*100, y: mean(returnsSeries(t))*100, ticker:t })), pointRadius:7 }] },
    options: { ...chartOptions(), plugins: { legend: { display:false }, tooltip: { callbacks: { label: ctx => `${ctx.raw.ticker}: Risk ${ctx.raw.x.toFixed(2)}%, Return ${ctx.raw.y.toFixed(2)}%` } } } }
  });
}
function renderOptimalTable(rows) {
  document.getElementById("optimalTable").innerHTML = rows.map(r => `
    <tr>
      <td><strong>${r.tickers.join(" - ")}</strong></td>
      <td>${r.tickers.map((t, i) => `${t} ${pct(r.weights[i], 0)}`).join(" · ")}</td>
      <td>${pct(r.portfolioReturn)}</td>
      <td>${pct(r.portfolioRisk)}</td>
      <td><strong>${num(r.sharpe, 3)}</strong></td>
    </tr>`).join("");
}
function renderBestBox() {
  if (!bestPortfolio) return;
  document.getElementById("bestBox").innerHTML = `
    <strong>Best Portfolio: ${bestPortfolio.tickers.join(" - ")}</strong><br>
    Weights: ${bestPortfolio.tickers.map((t, i) => `${t} ${pct(bestPortfolio.weights[i], 1)}`).join(" · ")}<br>
    Return/tháng: <span class="up">${pct(bestPortfolio.portfolioReturn)}</span> · Risk/tháng: ${pct(bestPortfolio.portfolioRisk)} · Sharpe: <strong>${num(bestPortfolio.sharpe, 3)}</strong> · Beta: ${num(bestPortfolio.portfolioBeta, 2)}`;
}
function renderAllocation() {
  if (!bestPortfolio) return;
  const capital = Number(document.getElementById("capitalInput").value || 0);
  const labels = bestPortfolio.tickers;
  const data = bestPortfolio.weights.map(w => w * 100);
  if (allocationChart) allocationChart.destroy();
  allocationChart = new Chart(document.getElementById("allocationChart"), {
    type:"doughnut",
    data: { labels, datasets: [{ data }] },
    options: { ...chartOptions(), cutout:"62%" }
  });
  document.getElementById("allocationTable").innerHTML = bestPortfolio.tickers.map((t, i) => {
    const amount = capital * bestPortfolio.weights[i];
    const shares = Math.floor(amount / latest()[t]);
    return `<tr><td><strong>${t}</strong></td><td>${pct(bestPortfolio.weights[i], 1)}</td><td>${vnd(amount)}</td><td>${money.format(shares)}</td></tr>`;
  }).join("");
}
function renderManualInputs() {
  document.getElementById("manualWeights").innerHTML = TICKERS.map((t, i) => `
    <div class="weight-row">
      <strong>${t}</strong>
      <input type="range" min="0" max="100" value="${i === 0 ? 30 : i === 1 ? 15 : i === 2 ? 20 : i === 3 ? 15 : 20}" data-manual="${t}" />
      <input type="number" min="0" max="100" value="${i === 0 ? 30 : i === 1 ? 15 : i === 2 ? 20 : i === 3 ? 15 : 20}" data-manual-number="${t}" />
    </div>`).join("");
  document.querySelectorAll("[data-manual]").forEach(slider => slider.addEventListener("input", () => {
    document.querySelector(`[data-manual-number="${slider.dataset.manual}"]`).value = slider.value;
  }));
  document.querySelectorAll("[data-manual-number]").forEach(input => input.addEventListener("input", () => {
    document.querySelector(`[data-manual="${input.dataset.manualNumber}"]`).value = input.value;
  }));
}
function compareManual() {
  const raw = TICKERS.map(t => Number(document.querySelector(`[data-manual-number="${t}"]`)?.value || 0));
  const total = raw.reduce((s, x) => s + x, 0);
  const box = document.getElementById("comparisonBox");
  if (Math.round(total) !== 100) {
    box.innerHTML = `Tổng tỷ trọng hiện là <strong>${total}%</strong>. Vui lòng chỉnh về 100%.`;
    return;
  }
  const manual = calculatePortfolio(TICKERS, raw.map(x => x / 100));
  const diff = bestPortfolio ? manual.sharpe - bestPortfolio.sharpe : 0;
  box.innerHTML = `
    <strong>Manual portfolio</strong>: Return ${pct(manual.portfolioReturn)}, Risk ${pct(manual.portfolioRisk)}, Sharpe <strong>${num(manual.sharpe, 3)}</strong><br>
    <strong>Optimal portfolio</strong>: Return ${pct(bestPortfolio.portfolioReturn)}, Risk ${pct(bestPortfolio.portfolioRisk)}, Sharpe <strong>${num(bestPortfolio.sharpe, 3)}</strong><br>
    Kết luận: ${diff >= 0 ? "Danh mục thủ công có Sharpe tốt hơn hoặc tương đương." : "Danh mục tối ưu có Sharpe tốt hơn danh mục thủ công."}`;
}
function renderHeatmap() {
  const corr = correlationMatrix();
  let html = `<div class="heat-cell heat-label"></div>` + TICKERS.map(t => `<div class="heat-cell heat-label">${t}</div>`).join("");
  TICKERS.forEach((rowTicker, i) => {
    html += `<div class="heat-cell heat-label">${rowTicker}</div>`;
    TICKERS.forEach((_, j) => {
      const v = corr[i][j];
      const alpha = Math.min(1, Math.abs(v));
      const color = v >= 0 ? `rgba(34, 197, 94, ${0.18 + alpha * 0.68})` : `rgba(239, 68, 68, ${0.18 + alpha * 0.68})`;
      html += `<div class="heat-cell" style="background:${color}">${num(v, 2)}</div>`;
    });
  });
  document.getElementById("heatmap").innerHTML = html;
}
function renderOrderForm() {
  const sel = document.getElementById("orderTicker");
  sel.innerHTML = TICKERS.map(t => `<option>${t}</option>`).join("");
  sel.value = selectedTicker;
  document.getElementById("orderPrice").value = latest()[selectedTicker];
  updateOrderValue();
  renderOrderLog();
}
function updateOrderValue() {
  const qty = Number(document.getElementById("orderQty").value || 0);
  const price = Number(document.getElementById("orderPrice").value || 0);
  document.getElementById("orderValue").textContent = "Giá trị lệnh: " + vnd(qty * price);
}
function placeDemoOrder() {
  const order = {
    time: new Date().toLocaleString("vi-VN"),
    ticker: document.getElementById("orderTicker").value,
    side: document.getElementById("orderSide").value,
    qty: Number(document.getElementById("orderQty").value || 0),
    price: Number(document.getElementById("orderPrice").value || 0)
  };
  orderLog.unshift(order);
  orderLog = orderLog.slice(0, 8);
  localStorage.setItem("demoOrders", JSON.stringify(orderLog));
  renderOrderLog();
}
function renderOrderLog() {
  document.getElementById("orderLog").innerHTML = orderLog.length ? orderLog.map(o => `
    <div class="order-row"><span><strong class="${o.side === "BUY" ? "up" : "down"}">${o.side}</strong> ${o.qty} ${o.ticker} @ ${vnd(o.price)}</span><small>${o.time}</small></div>`).join("") : `<div class="order-row">Chưa có lệnh mô phỏng.</div>`;
}
function exportReport() {
  if (!bestPortfolio) runOptimization();
  const lines = [];
  lines.push("PORTFOLIO EXCHANGE DASHBOARD - SUMMARY");
  lines.push("Data: Monthly stock prices from 05/2021 to 05/2026");
  lines.push("Stocks: " + TICKERS.join(", "));
  lines.push("");
  lines.push("Best optimal risky portfolio: " + bestPortfolio.tickers.join(" - "));
  lines.push("Weights: " + bestPortfolio.tickers.map((t, i) => `${t} ${pct(bestPortfolio.weights[i], 1)}`).join(" | "));
  lines.push("Expected return/month: " + pct(bestPortfolio.portfolioReturn));
  lines.push("Risk/month: " + pct(bestPortfolio.portfolioRisk));
  lines.push("Sharpe ratio: " + num(bestPortfolio.sharpe, 3));
  lines.push("Beta: " + num(bestPortfolio.portfolioBeta, 2));
  lines.push("");
  lines.push("Stock metrics:");
  TICKERS.forEach(t => lines.push(`${t} | Return/month ${pct(mean(returnsSeries(t)))} | Risk/month ${pct(stdev(returnsSeries(t)))} | Beta ${num(beta(t), 2)} | Max drawdown ${pct(maxDrawdown(t))}`));
  document.getElementById("reportText").value = lines.join("\n");
}
function renderAllSelected() {
  renderWatchlist();
  renderStockDetail();
  renderMainChart();
  renderPriceBoard();
  document.getElementById("orderTicker").value = selectedTicker;
  document.getElementById("orderPrice").value = latest()[selectedTicker];
  updateOrderValue();
}
function bindEvents() {
  document.querySelectorAll("[data-chart-mode]").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll("[data-chart-mode]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    chartMode = btn.dataset.chartMode;
    renderMainChart();
  }));
  document.getElementById("themeToggle").addEventListener("click", () => { document.body.classList.toggle("light"); renderAllCharts(); });
  document.getElementById("optimizeBtn").addEventListener("click", runOptimization);
  document.getElementById("rfInput").addEventListener("change", runOptimization);
  document.getElementById("capitalInput").addEventListener("input", renderAllocation);
  document.getElementById("manualCalcBtn").addEventListener("click", compareManual);
  document.getElementById("orderTicker").addEventListener("change", e => { document.getElementById("orderPrice").value = latest()[e.target.value]; updateOrderValue(); });
  ["orderQty", "orderPrice"].forEach(id => document.getElementById(id).addEventListener("input", updateOrderValue));
  document.getElementById("placeOrderBtn").addEventListener("click", placeDemoOrder);
  document.getElementById("exportBtn").addEventListener("click", exportReport);
}
function renderAllCharts() { renderMainChart(); renderRiskReturnChart(); renderAllocation(); }
function init() {
  bindEvents();
  renderTickerTape();
  renderManualInputs();
  renderOrderForm();
  renderHeatmap();
  runOptimization();
  renderAllSelected();
  renderRiskReturnChart();
  exportReport();
}

document.addEventListener("DOMContentLoaded", init);
