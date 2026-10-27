/** @type {HTMLInputElement} */
const archivoEl = document.getElementById("archivo");

const enviar = document.getElementById("enviar");

/** @type {HTMLImageElement} */
const imagen = document.getElementById("imagen");

enviar.addEventListener("click", async (ev) => {
  ev.preventDefault();
  const referencia = archivoEl.files[0]; // el primer archivo elegido

  const formData = new FormData();
  formData.append("perfil", referencia);

  const peticion = await fetch("http://localhost:3000/subir-imagen", {
    body: formData,
    method: "POST",
  });

  const json = await peticion.json();

  imagen.src = json.imagen;
});
