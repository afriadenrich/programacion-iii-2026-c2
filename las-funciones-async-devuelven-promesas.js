(async () => {
  async function traerSerie(id) {
    // Función asíncrona / asincrónica
    try {
      const response = await fetch("https://api.tvmaze.com/shows/" + `${id}`);

      if (!response.ok) {
        throw new Error(`en la petición (HTTP: ${response.status})`);
      }

      const serie = await response.json();

      return serie;
    } catch (error) {
      console.log(error);
    }
  }

  const serie = await traerSerie(13);

  console.log(serie);
  console.log("Hola mundo");
})();

// minima sintaxis para hacer una función y llamarla
(() => {})();

// // 5
// for(i: 1 -> 6){
//     fetch(i)
// }

// const pagina = 1; // 1 al 6
// const pagina = 2; // 7 al 12
// const pagina = 3; // 13 al 18

// paginaSiguiente(){
//     pagina++

//     borrarSeriesDelDocumento();

//     for(i: pagina -> pagina + 6){
//     fetch(i)
// }

// }

// <a href="" target="_blank">
//     <img></img>
// </a>

// window.onload = () => { // "En cuanto cargue la window"
//   // Se ejecuta la página cuando cargue la window
// }
