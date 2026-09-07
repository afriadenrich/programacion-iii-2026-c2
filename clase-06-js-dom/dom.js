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
