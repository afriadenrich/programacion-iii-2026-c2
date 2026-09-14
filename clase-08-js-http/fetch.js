console.log("1. FETCH");

// Método que me permite hacer PETICIONES a recursos externos, como internet.
// GET https://api.github.com/users/afriadenrich
const peticion = fetch("https://api.github.com/users/afriadenrich", {
  method: "GET", // EL GET NO ES NECESARIO YA QUE ES POR DEFECTO GET
});

peticion.then((respnose) => {
  console.log(respnose);

  const body = respnose.json();

  body.then((valorFinal) => {
    console.log(valorFinal);
  });
});

fetch("https://api.github.com/users/torvalds")
  .then((res) => {
    res.json().then((value) => {
      console.log(value);

      const imagen = value.avatar_url;
      const imageElement = document.createElement("img");
      imageElement.src = imagen;

      document.body.insertAdjacentElement("beforeend", imageElement);
    });
  })
  .catch((reason) => {
    console.log(reason);
  });

// ESTO NO SE HACE.
setTimeout(() => {
  //   console.log("Se ejecuta 3 segundos depués de arrancar la página");
  //   console.log(peticion);
}, 3000); // 3 segundos

setInterval(() => {
  console
    .log
    // "Se ejecuta cada 1 segundo infinitamente hasta que se corte el intervalo",
    ();
  //   console.log(peticion);
}, 1000);

console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
console.log("HOLA MUNDO");
