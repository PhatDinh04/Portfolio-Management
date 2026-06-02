const riskFreeRate = 0.045;
const marketReturn = 0.11;

const stocks = [
  { code: "HPG", sector: "Steel", return: 0.135, risk: 0.245, beta: 1.25 },
  { code: "KDC", sector: "Consumer Goods", return: 0.105, risk: 0.185, beta: 0.82 },
  { code: "FPT", sector: "Technology", return: 0.165, risk: 0.215, beta: 1.08 },
  { code: "VNM", sector: "Consumer Staples", return: 0.085, risk: 0.155, beta: 0.68 },
  { code: "VCB", sector: "Banking", return: 0.118, risk: 0.195, beta: 0.95 }
];

const correlationMatrix = [
  [1.00, 0.35, 0.42, 0.28, 0.50],
  [0.35, 1.00, 0.30, 0.45, 0.33],
  [0.42, 0.30, 1.00, 0.25, 0.40],
  [0.28, 0.45, 0.25, 1.00, 0.29],
  [0.50, 0.33, 0.40, 0.29, 1.00]
];

let allocationChart;
let returnChart;
let riskReturnChart;

function formatPercent(value) {
  return (value * 100).toFixed(2) + "%";
}

function formatNumber(value) {
  return value.toFixed(3);
}

function loadStockTable() {
  const table = document.getElementById("stockTable");
  table.innerHTML = "";

  stocks.forEach(stock => {
    const row = `
      <tr>
        <td><strong>${stock.code}</strong></td>
        <td>${stock.sector}</td>
        <td>${formatPercent(stock.return)}</td>
        <td>${formatPercent(stock.risk)}</td>
        <td>${stock.beta.toFixed(2)}</td>
      </tr>
    `;

    table.innerHTML += row;
  });
}

function calculatePortfolio(weights) {
  let portfolioReturn = 0;
  let portfolioBeta = 0;
  let portfolioVariance = 0;

  for (let i = 0; i < stocks.length; i++) {
    portfolioReturn += weights[i] * stocks[i].return;
    portfolioBeta += weights[i] * stocks[i].beta;
  }

  for (let i = 0; i < stocks.length; i++) {
    for (let j = 0; j < stocks.length; j++) {
      const covariance =
        correlationMatrix[i][j] * stocks[i].risk * stocks[j].risk;

      portfolioVariance += weights[i] * weights[j] * covariance;
    }
  }

  const portfolioRisk = Math.sqrt(portfolioVariance);
  const sharpe = (portfolioReturn - riskFreeRate) / portfolioRisk;
  const capmReturn =
    riskFreeRate + portfolioBeta * (marketReturn - riskFreeRate);

  return {
    portfolioReturn,
    portfolioRisk,
    portfolioBeta,
    sharpe,
    capmReturn
  };
}

function calculateManualPortfolio() {
  const rawWeights = [
    Number(document.getElementById("wHPG").value),
    Number(document.getElementById("wKDC").value),
    Number(document.getElementById("wFPT").value),
    Number(document.getElementById("wVNM").value),
    Number(document.getElementById("wVCB").value)
  ];

  const totalWeight = rawWeights.reduce((sum, value) => sum + value, 0);

  if (totalWeight !== 100) {
    document.getElementById("manualResult").innerHTML =
      "Tổng tỷ trọng phải bằng 100%. Hiện tại tổng tỷ trọng là " +
      totalWeight +
      "%.";

    return;
  }

  const weights = rawWeights.map(value => value / 100);
  const result = calculatePortfolio(weights);

  document.getElementById("portfolioReturn").innerText =
    formatPercent(result.portfolioReturn);

  document.getElementById("portfolioRisk").innerText =
    formatPercent(result.portfolioRisk);

  document.getElementById("manualResult").innerHTML = `
    <strong>Expected Return:</strong> ${formatPercent(result.portfolioReturn)}<br>
    <strong>Portfolio Risk:</strong> ${formatPercent(result.portfolioRisk)}<br>
    <strong>Sharpe Ratio:</strong> ${formatNumber(result.sharpe)}<br>
    <strong>Portfolio Beta:</strong> ${result.portfolioBeta.toFixed(2)}<br>
    <strong>CAPM Expected Return:</strong> ${formatPercent(result.capmReturn)}
  `;

  updateAllocationChart(rawWeights);
}

function getCombinations(array, size) {
  const result = [];

  function backtrack(start, combination) {
    if (combination.length === size) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < array.length; i++) {
      combination.push(array[i]);
      backtrack(i + 1, combination);
      combination.pop();
    }
  }

  backtrack(0, []);
  return result;
}

function calculateOptimalPortfolios() {
  const indexes = [0, 1, 2, 3, 4];
  const combinations = getCombinations(indexes, 3);
  const table = document.getElementById("optimalTable");

  table.innerHTML = "";

  let bestPortfolio = null;

  combinations.forEach(combo => {
    const weights = [0, 0, 0, 0, 0];

    combo.forEach(index => {
      weights[index] = 1 / 3;
    });

    const result = calculatePortfolio(weights);
    const name = combo.map(index => stocks[index].code).join(" - ");

    if (!bestPortfolio || result.sharpe > bestPortfolio.sharpe) {
      bestPortfolio = {
        name,
        ...result
      };
    }

    table.innerHTML += `
      <tr>
        <td>${name}</td>
        <td>${formatPercent(result.portfolioReturn)}</td>
        <td>${formatPercent(result.portfolioRisk)}</td>
        <td>${formatNumber(result.sharpe)}</td>
      </tr>
    `;
  });

  document.getElementById("bestPortfolioName").innerText = bestPortfolio.name;
  document.getElementById("bestPortfolioSharpe").innerText =
    "Sharpe Ratio: " + formatNumber(bestPortfolio.sharpe);
}

function createCharts() {
  const stockCodes = stocks.map(stock => stock.code);
  const stockReturns = stocks.map(stock => stock.return * 100);

  const allocationCtx = document
    .getElementById("allocationChart")
    .getContext("2d");

  allocationChart = new Chart(allocationCtx, {
    type: "doughnut",
    data: {
      labels: stockCodes,
      datasets: [
        {
          data: [30, 20, 25, 15, 10]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb"
          }
        }
      }
    }
  });

  const returnCtx = document.getElementById("returnChart").getContext("2d");

  returnChart = new Chart(returnCtx, {
    type: "bar",
    data: {
      labels: stockCodes,
      datasets: [
        {
          label: "Expected Return (%)",
          data: stockReturns
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: "#e5e7eb"
          }
        },
        y: {
          ticks: {
            color: "#e5e7eb"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb"
          }
        }
      }
    }
  });

  const riskReturnCtx = document
    .getElementById("riskReturnChart")
    .getContext("2d");

  riskReturnChart = new Chart(riskReturnCtx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Stocks",
          data: stocks.map(stock => ({
            x: stock.risk * 100,
            y: stock.return * 100
          }))
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Risk (%)",
            color: "#e5e7eb"
          },
          ticks: {
            color: "#e5e7eb"
          }
        },
        y: {
          title: {
            display: true,
            text: "Expected Return (%)",
            color: "#e5e7eb"
          },
          ticks: {
            color: "#e5e7eb"
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb"
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const stock = stocks[context.dataIndex];
              return `${stock.code}: Risk ${context.raw.x.toFixed(2)}%, Return ${context.raw.y.toFixed(2)}%`;
            }
          }
        }
      }
    }
  });
}

function updateAllocationChart(weights) {
  allocationChart.data.datasets[0].data = weights;
  allocationChart.update();
}

loadStockTable();
createCharts();
calculateManualPortfolio();
calculateOptimalPortfolios();
