const API_URL = "https://swapi.tech/api";
async function traerPersonajes() {
  const ruta = "/people";

  const response = await fetch(API_URL + ruta);
  const json = await response.json();

  arrPersonajes = json.result || json.results;

  return { arrPersonajes, previous: json.previous, next: json.next };
}

module.exports = { traerPersonajes };
