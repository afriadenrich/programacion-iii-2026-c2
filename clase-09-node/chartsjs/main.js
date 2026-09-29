// import { Chart } from "./node_modules/chart.js/dist/chart.js";
const elemento = document.getElementById("grafico");

new Chart(elemento, {
  type: "radar",
  data: {
    labels: ["ataque", "defensa", "salud", "magia"],
    datasets: [
      {
        label: "pokemon",
        data: [100, 50, 100, 25],
        borderColor: "#f00",
        backgroundColor: "#f005",
      },
      {
        label: "messi",
        data: [100, 50, 20, 100],
        borderColor: "#00f",
        backgroundColor: "#00f5",
      },
    ],
  },
  options: {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  },
});
