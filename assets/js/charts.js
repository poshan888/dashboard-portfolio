document.addEventListener('DOMContentLoaded', () => {
  initCharts();
});

function initCharts() {
  const ctx = document.getElementById('pendingChart');
  if (!ctx) return; // safety check

  new Chart(ctx, { /* config */ });
}


const chartStore = {};

function destroyChart(id) {
  if (chartStore[id]) {
    chartStore[id].destroy();
    delete chartStore[id];
  }
}

function createDoughnutChart(id, config) {
  const canvas = document.getElementById(id);
  if (!canvas) return;

  destroyChart(id);

  chartStore[id] = new Chart(canvas, config);
}

// ORDERS DONUT
new Chart(document.getElementById("reqChart"), {
  type: "doughnut",
  data: {
    labels: ["Requests"],
    datasets: [{
      data: [44, 57],
      backgroundColor: ["#3a2a18", "#D9D9D9"],
      borderWidth: 0
    }]
  },
  options: {
    radius: '100%',
    padding: '16px',
    cutout: '70%',
    plugins: { legend: { display: false } }
  }
});
new Chart(document.getElementById("progressChart"), {
  type: "doughnut",
  data: {
    labels: ["In Progress"],
    datasets: [{
      data: [51, 64],
      backgroundColor: ["#c47a2c", "#D9D9D9"],
      borderWidth: 0
    }]
  },
  options: {
    radius: '100%', 
    padding: '16px',
    cutout: '70%',
    plugins: { legend: { display: false } }
  }
});
new Chart(document.getElementById("submittedChart"), {
  type: "doughnut",
  data: {
    labels: ["Submitted"],
    datasets: [{
      data: [51, 64],
      backgroundColor: ["#5a6f63", "#D9D9D9"],
      borderWidth: 0
    }]
  },
  options: {
    radius: '100%',
    padding: '16px',
    cutout: '70%',
    plugins: { 
      legend: { display: false },
    }
  }
});

// PENDING APPROVAL
new Chart(document.getElementById("pendingChart"), {
  type: "doughnut",
  data: {
    datasets: [{
      data: [48,52],
      backgroundColor: ["#0a4b5e", "#e4ebef"],
      borderWidth: 0
    }]
  },
  options: {
    maintainAspectRatio: true,
    aspectRatio: 1,
    cutout: '72%',   // thicker ring like original
    borderWidth: 8,
    plugins: { legend: { display: true } }
  }
});

// EQUIPMENT BAR
new Chart(document.getElementById("equipmentChart"), {
  type: "bar",
  data: {
    labels: [
      "External Keyboard",
      "Sit/Stand Desk",
      "Task Chair",
      "Dual Monitor Arm",
      "External Monitor",
      "Task Light",
      "External Mouse",
      "Palm Support",
      "Footrest",
      "Carpet Mat"
    ],
    datasets: [{
      data: [138, 123, 120, 51, 44, 32, 29, 11, 8, 8],
      backgroundColor: ["#2D5F75", "#E5EBEC"],
      borderRadius: 0
    }]
  },
  options: {
    indexAxis: "y",
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } }
    },
  }
});

const donutOptions = {
  cutout: '50%',
  animation: {
    animateRotate: true,
    duration: 1200,
    easing: 'easeOutCubic'
  },
  plugins: {
    tooltip: { enabled: false },
    legend: { display: false }
  }
};

new Chart(reqChart, {
  type: "doughnut",
  data: { datasets: [{ data: [44, 33], backgroundColor: ["#3a2a18","#e4ebef"] }] },
  options: donutOptions
});

new Chart(progressChart, {
  type: "doughnut",
  data: { datasets: [{ data: [51, 31], backgroundColor: ["#c47a2c","#e4ebef"] }] },
  options: donutOptions
});

new Chart(submittedChart, {
  type: "doughnut",
  data: { datasets: [{ data: [64, 13], backgroundColor: ["#5a6f63","#e4ebef"] }] },
  options: donutOptions
});

setTimeout(() => {
  donut-wrapper.classList.add('donut-badge');
}, 900);
