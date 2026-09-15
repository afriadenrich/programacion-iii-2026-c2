// VARIABLES

const nombreInput = document.querySelector("#nombre");
const buscarBtn = document.querySelector("#buscar");
const imagenEl = document.querySelector("#imagen");
const formEl = document.querySelector("form");

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

// ARRANQUE

nombreInput.value = "charmander";

// EVENTOS

formEl.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const url = `${API_URL}${nombreInput.value}`;

  fetch(url).then((res) => {
    const peticionBody = res.json();

    peticionBody
      .then((pokemon) => {
        imagenEl.src = pokemon.sprites.front_default;
      })
      .catch((rason) => {
        console.log("No se encontró");
      });
  });
});

formEl.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const url = `${API_URL}${nombreInput.value}`;

  fetch(url);
});

// FUNCIONES EXTRA
// PALABRA RESERVADA: async -> marca una función o callback como asincrónica
async function traerPokemonAsync() {
  // "Esta linea es una petición que genera una promesa. En lugar de guardar la promesa, esperá y guardá la respuesta"
  // await -> esperar
  const respuesta = await fetch(`${API_URL}totodile`);

  const body = await respuesta.json();

  console.log(body);
}

traerPokemonAsync();

/* EN LIMPIO */

async function traerPokemonAsync() {
  const respuesta = await fetch(`${API_URL}totodile`);

  const body = await respuesta.json();

  console.log(body);
}

traerPokemonAsync();
function traerPokemonThen() {
  fetch(`${API_URL}totodile`).then((respuesta) => {
    respuesta.json().then((body) => {
      console.log(body);
    });
  });
}

traerPokemonThen();
