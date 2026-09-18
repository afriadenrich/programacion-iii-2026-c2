import Swal from "./node_modules/sweetalert2/dist/sweetalert2.esm.js";

document.getElementById("mostrar").onclick = () => {
  Swal.fire({
    title: "Funciona",
    text: "texto texto",
    icon: "success",
  });
};
