// Mostrar algo en consola

console.log("algo");

// VARIABLES

// var variable = "hola"; // GLOBAL. EN DESUSO NO SE DEBE USAR VAR.

let otra = "chau"; // local

const MATH_PI = 3.141592; // local / NO PUEDE CAMBIAR

console.log(
  //   variable,
  otra,
  MATH_PI,
  "Otro parámetro",
  88,
  "asda",
  true,
  {},
  [],
);

function contar() {
  //   var numero1 = 1; EN DESUSO NO SE DEBE USAR VAR.
  let numero2 = 2;
  // console.log(numero1);
}

contar();

// TIPOS DE DATOS

let numero = 123987.12123; // ❖ number: para números de cualquier tipo (enteros o flotantes).
let big = 1231231231231231213221n; // ❖ bigint: para números enteros de longitud arbitraria.
let cadena1 = "Hola mundo"; // ❖ string: para cadenas de cero, uno o varios caracteres. (*)
let cadena2 = "Hola mundo" + " otra cosa"; // ❖ string: para cadenas de cero, uno o varios caracteres. (*)
let cadena3 = `Hola mundo ${numero}`; // ❖ string: para cadenas de cero, uno o varios caracteres. (*)
let bool = true; // ❖ boolean: para valores verdadero o falso (true / false).
console.log(numero, big, cadena1, cadena2, cadena3);

// ❖ null: para valores desconocidos.
let valorNulo = null;
console.log(valorNulo);
// ❖ undefined: para valores no asignados.
let sinValor;
console.log(sinValor);

// ❖ symbol: para identificadores únicos.
let symbol1 = Symbol("algo");
let symbol2 = Symbol("algo");
console.log(symbol1 === symbol2);
// ❖ object (no primitivo): para estructuras de datos complejas.

const objeto = {
  nombre: "Agus",
  apellido: "Friasciacsmua",
};

console.log(objeto);
console.log(objeto.nombre);

const array1 = [1, 2, 3, 4, 5];
const array2 = ["1", "2", "3", "4", "5"];
const array3 = [
  "1",
  2,
  true,
  {
    nombre: "Agus",
    apellido: "Friasciacsmua",
  },
  "5",
];

console.log(array1);
console.log(array2);
console.log(array3);

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

if (numero > 50) {
  console.log("Es mayor");
} else {
  console.log("Es menor");
}

switch (numero) {
  case 88:
    console.log("ochentaiocho");
    break;

  default:
    console.log("No es 88");
}

console.log("==== COMPARACIONES ====");
// COMPARACIONES

// > -> numeros
// < -> numeros
// ==
// <= -> numeros
// >= -> numeros
// ===
// !=
// !==

const valorNuevo1 = "Hola";
const valorNuevo2 = "Hola";

// console.log(valorNuevo1 == valorNuevo2);
// console.log(valorNuevo1 === valorNuevo2);

const numero0 = 0;
const stringVacio = "";

const falso = false;

console.log(numero0 === stringVacio); // Que coincida valor Y tipo de dato
console.log(numero0 == stringVacio); // Que coincida valor
console.log(numero0 == falso); // Que coincida valor

// Qué tipo de dato es?
console.log(typeof numero0 === "number");

const usr1 = { nombre: "Agus" };
const usr2 = { nombre: "Agus" };
const algo = 1;
const algo2 = 1;
console.log(usr1 === usr2);
console.log([1] === [1]);
console.log(3 == "3");
console.log(algo === algo2);

console.log(usr1.nombre === usr2.nombre);

console.log(JSON.stringify(usr1) == JSON.stringify(usr2));
