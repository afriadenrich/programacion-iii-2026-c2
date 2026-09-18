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
