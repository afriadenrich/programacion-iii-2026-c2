const tbody = document.getElementById("tbody");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const ficha = document.getElementById("ficha");
/** @type {HTMLInputElement} */
const busquedaInput = document.getElementById("busqueda-input");
const busquedaBtn = document.getElementById("busqueda-btn");

const API_URL = "https://swapi.tech/api";

let previous = null;

let next = null;

let arrPersonajes = [];

// 3. Quiero que lo que trae la api reemplaze a lo anterior

// EVENTOS
// 1. Quiero hacer el fetch a /people y mostrar los datos en la tabla. Cuando se cargue la página
window.addEventListener("load", () => {
  mostrarPersonajes(API_URL + "/people");
});

// 2. Quiero que los botones de anterior y siguiente hagan el fetch a la api de vuelta con la paginación
anterior.onclick = () => {
  if (!previous) return;
  mostrarPersonajes(previous);
};

siguiente.onclick = () => {
  if (!next) return;
  mostrarPersonajes(next);
};

busquedaBtn.addEventListener("click", () => {
  const busqueda = busquedaInput.value;
  const url = API_URL + "/people" + "?name=" + busqueda;

  const queryParams = new URLSearchParams();
  queryParams.append("name", busqueda);
  const urlAlternativa = `${API_URL}/people?${queryParams.toString()}`;

  mostrarPersonajes(url);
});

// FUNCIONES EXTRA

async function mostrarPersonajes(ruta) {
  mostrarSpinner(tbody);

  const response = await fetch(ruta);
  const json = await response.json();

  previous = json.previous;
  next = json.next;

  // reemplazar el contenido con nada
  /**
   * @type { {uid: string, name: string, url: string}[] }
   * @type { {uid: string, properties: {name: string, url: string}}[] }
   */
  arrPersonajes = json.result || json.results;

  // if(busquedaInput.value){
  //   arrPersonajes.filter()
  // }

  mostrarArray();
}

function mostrarArray() {
  tbody.replaceChildren();
  arrPersonajes.forEach((pj) => {
    const tr = document.createElement("tr");

    const idEl = document.createElement("td");
    idEl.textContent = pj.uid;

    const nombreEl = document.createElement("td");

    nombreEl.textContent = pj.name || pj.properties.name;

    const urlEl = document.createElement("td");
    const fichaBtn = document.createElement("button");
    urlEl.append(fichaBtn);
    fichaBtn.classList.add("btn", "btn-primary");
    fichaBtn.textContent = "Ver más";

    fichaBtn.onclick = () => verFicha(pj.uid); // IMPORTANTE QUE SEA CALLBACK

    tr.append(idEl, nombreEl, urlEl);
    tbody.appendChild(tr);
  });
}

function ordenarPorNombre() {
  arrPersonajes.sort((a, b) => {
    /** @type {string} */
    const nombreA = a.name || a.properties.name;
    /** @type {string} */
    const nombreB = b.name || b.properties.name;

    const comparacion = nombreA.localeCompare(nombreB);

    console.log(nombreA, nombreB, comparacion);

    return comparacion;
  });

  mostrarArray();
}

function ordenarPorId(ascendente = 1) {
  arrPersonajes.sort((a, b) => {
    return a.uid * ascendente - b.uid;
  });

  mostrarArray();
}

async function verFicha(id) {
  mostrarSkeleton(ficha);
  const response = await fetch(`${API_URL}/people/${id}`);
  const json = await response.json();

  const {
    name,
    hair_color,
    height,
    eye_color,
    birth_year,
    vehicles,
    starships,
    films,
  } = json.result.properties;

  ficha.replaceChildren();

  ficha.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Color de pelo: ${hair_color}</li>
        <li class="list-group-item">Altura: ${height}</li>
        <li class="list-group-item">Color de ojos: ${eye_color}</li>
        <li class="list-group-item">Año de nacimiento: ${birth_year}</li>
        <li class="list-group-item">Vehiculos: ${vehicles.length}</li>
        <li class="list-group-item">Naves: ${starships.length}</li>
        <li class="list-group-item">Peliculas: ${films.length}</li>
      </ul>
    </div>`,
  );
}

function mostrarSpinner(elemento) {
  elemento.replaceChildren();

  elemento.insertAdjacentHTML(
    "afterbegin",
    `<tr>
    <td colspan="3">
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    </td>
    </tr>`,
  );
}

function mostrarSkeleton(elemento) {
  elemento.replaceChildren();

  elemento.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" aria-hidden="true">
  <div class="card-body">
        <h5 class=" placeholder-glow card-title">${name}</h5>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        <p class="card-text placeholder-glow">
          <span class="placeholder col-12 placeholder-lg" ></span>
        </p>
        </div>
        </div>
</div>`,
  );
}
