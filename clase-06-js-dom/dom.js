const paragraphs = document.querySelectorAll("p");
// const paragraphs = document.querySelectorAll(".texto");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.

paragraphs[1].id = "cambiado";
console.log(paragraphs);

// recibe la misma sintaxis que los selectores de css (nombres de etiquetas, clases, ids, relaciones con > etc.)
/**
 * @type {HTMLButtonElement}
 */
const boton = document.querySelector("#boton");
const p = document.querySelector("p");

const main = document.querySelector("main");

// 1. Selectores.
const body = document.body;
// const arrayTodosLosP = document.querySelectorAll("p");
// const arrayTodosLosP = document.getElementsByTagName("p");
// const arrayTodosLosP = document.getElementsByTagNameNS("p");
// const arrayTodosLosP = document.getElementsByName("nombre"); // ESTO NO ES. Esto busca el atributo name="nombre"
// const unParrafo = document.querySelector("p"); // primer parrafo
/**
 * @type {HTMLParagraphElement}
 */
// const unParrafo = document.getElementById("mundo"); // primer parrafo
const unParrafo = document.querySelector("p#mundo"); // primer parrafo
const unParrafoMuyConcreto = document.querySelector("div > p.texto");

console.log({ unParrafo: unParrafo });
document.quer;
