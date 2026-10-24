// REFERENCIAS
/** @type  { HTMLFormElement } */
const formEl = document.getElementById("form");
/** @type  { HTMLInputElement} */
const nombreEl = document.getElementById("nombre");
/** @type  { HTMLInputElement} */
const apellidoEl = document.getElementById("apellido");
/** @type  { HTMLParagraphElement} */
const resultadoEl = document.getElementById("resultado");
/** @type  { HTMLTableSectionElement } */
const tbodyEl = document.getElementById("tbody");

// EVENTOS
window.addEventListener("load", async (ev) => {
  tbodyEl.replaceChildren();

  const peticion = await fetch("http://localhost:3000/profesores", {
    method: "GET",
  });

  const respuesta = await peticion.json();

  if (respuesta && Array.isArray(respuesta)) {
    respuesta.forEach((profe) => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const nombreCell = document.createElement("td");
      const apellidoCell = document.createElement("td");
      const qCursosCell = document.createElement("td");

      idCell.textContent = profe.id;
      nombreCell.textContent = profe.nombre;
      apellidoCell.textContent = profe.apellido;
      qCursosCell.textContent = profe.Cursos.length; //Gatito Tiene Hambre

      row.append(idCell, nombreCell, apellidoCell, qCursosCell);

      tbodyEl.append(row);
    });
  }
});

formEl.addEventListener("submit", async (ev) => {
  resultadoEl.textContent = "";
  ev.preventDefault();

  const nombre = nombreEl.value;
  const apellido = apellidoEl.value;

  const profesor = {
    nombre: nombre,
    apellido, // apellido: apellido
  };

  // si lo mandamos como texto sin el JSON.stringify, nos manda [Object object]

  const body = JSON.stringify(profesor);

  const peticion = await fetch("http://localhost:3000/profesores", {
    body, // body: body,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (peticion.ok) {
    resultadoEl.textContent = "Todo ok!";
  } else {
    resultadoEl.textContent = "Falló!!!";
  }
});
