// Quiero tomar los valores escritos en los inputs y mostrarlos en consola CUANDO se aprete el botón

/**
 * @type {HTMLInputElement} nombre
 */
const inputNombre = document.getElementById("username");

/**
 * @type {HTMLInputElement}
 */
const inputPass = document.getElementById("password");

/**
 * @type {HTMLButtonElement} nombre
 */
const buttonMostrar = document.getElementById("registrarse");
// const buttonMostrar = document.querySelector("button#registrarse");

const mostrarTodo = () => {
  const nombre = inputNombre.value;
  const pass = inputPass.value;

  console.log(nombre, pass);
};

buttonMostrar.onclick = mostrarTodo;

// NO va a hacer el cambio reverso automáticamente
buttonMostrar.onmouseenter = () => {
  buttonMostrar.textContent = "¿Estás segur@?";
};

buttonMostrar.onmouseleave = () => {
  buttonMostrar.textContent = "Registrarse";
};

// Mejor hacerlo en el html
// inputNombre.minLength = 6;
// inputNombre.required = true;

inputNombre.oninvalid = () => {
  inputNombre.className = "rojo bg-rojo";
  console.log("ser llamado");
};

document.body.style.backgroundColor = "#aaa";

// varias funciones a un mismo evento
// document.body.ondblclick
document.body.addEventListener("dblclick", () => {
  console.log("Anda el doble click");
});

const dblClick = () => {
  console.log("Se pueden agregar y quitar referencias");
};
// Recordar: NO parentesis en la función porque eso la ejecuta y yo solo necesito la REFERENCIA.

document.body.addEventListener("dblclick", dblClick);

document.body.removeEventListener("dblclick", dblClick);

document.body.style.backgroundColor = "#333";
document.querySelector("html").style.backgroundColor = "#aaa";

const form = document.querySelector("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // evita el comportamiento por defecto
});

document.addEventListener("auxclick", (ev) => {
  console.log("click derecho", ev);
});
