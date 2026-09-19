// import { jsPDF } from "./node_modules/jspdf/dist/jspdf.es.js";
// const { jsPDF } = require("module");
const { jsPDF } = window.jspdf;
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);

document.getElementById("guardar").onclick = () => {
  doc.save("a4.pdf");
};
