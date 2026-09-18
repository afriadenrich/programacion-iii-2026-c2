console.log("Hola mundo");
// 1. Crear proyecto
// npm init

// 2. Instlar paquete/s
// npm install ...
// npm install toastify-js
// npm install toastify-js@1.12.0

// 3. Traer el paquete

// COMMON MODULES
// const Toastify = require("./node_modules/toastify-js/src/toastify"); Deprecado para navegadores. Usar import

// ECMA SCRIPT MODULES -> ESM -> más moderno
// import Toastify from "./node_modules/toastify-js/src/toastify.js"; -> este funciona solo si está type="module" en la tag script

// 4. Usar el paquete
Toastify({
  text: "This is a toast",
  duration: 3000,
  close: false,
  gravity: "bottom", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to bottom, #ff0000, #000000)",
  },
  onClick: function () {
    console.log("Hola mundo");
  }, // Callback after click
}).showToast();

function mostrar() {
  console.log("Muestro");
}
