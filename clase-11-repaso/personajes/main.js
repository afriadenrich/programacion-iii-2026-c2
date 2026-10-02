const tbody = document.getElementById("tbody");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const ficha = document.getElementById("ficha");

const API_URL = "https://swapi.tech/api";

let previous = null;

let next = null;

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

// FUNCIONES EXTRA

async function mostrarPersonajes(ruta) {
  mostrarSpinner(tbody);

  const response = await fetch(ruta);
  const json = await response.json();

  previous = json.previous;
  next = json.next;

  tbody.replaceChildren(); // reemplazar el contenido con nada
  /**
   * @type { {uid: string, name: string, url: string}[] }
   */
  const arrPersonajes = json.results;

  arrPersonajes.forEach((pj) => {
    const tr = document.createElement("tr");

    const idEl = document.createElement("td");
    idEl.textContent = pj.uid;

    const nombreEl = document.createElement("td");
    nombreEl.textContent = pj.name;

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
      </div>
      <ul class=" placeholder-glow list-group list-group-flush">
        <li class="list-group-item placeholder" ><span ></span></li>
        <li class="list-group-item placeholder" ><span ></span></li>
        <li class="list-group-item placeholder" ><span ></span></li>
        <li class="list-group-item placeholder" ><span ></span></li>
        <li class="list-group-item placeholder" ><span ></span></li>        
        <li class="list-group-item placeholder" ><span ></span></li>        
        <li class="list-group-item placeholder" ><span ></span></li>      
        </ul>
  </div>
</div>`,
  );
}
