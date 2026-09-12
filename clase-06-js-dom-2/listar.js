// VARIABLES
/** @type {HTMLDivElement} */
const lista = document.getElementById("lista");

// EJECUCIONES DE ARRANQUE
// Al cargar, esta página muestre TODOS los autos guardados.

const autos = Auto.listar();

autos.forEach((a) => {
  const fila = document.createElement("tr");

  const marca = document.createElement("td");
  const modelo = document.createElement("td");
  const precio = document.createElement("td");

  marca.textContent = a.marca;
  modelo.textContent = a.modelo;
  precio.textContent = a.precio;

  fila.append(marca, modelo, precio);

  lista.appendChild(fila);
});

// EVENTOS

// FUNCIONES AUX
