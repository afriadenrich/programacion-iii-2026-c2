let array = [
  { nombre: "Agus", apellido: "A" },
  { nombre: "Nico", apellido: "B" },
  { nombre: "Marcos", apellido: "C" },
  { nombre: "Leonel", apellido: "D" },
  { nombre: "Sebastian", apellido: "E" },
  { nombre: "Mayra", apellido: "F" },
  { nombre: "Rocio", apellido: "G" },
];

array = array.map((el) => {
  return el.nombre + " " + el.apellido;
});

console.log(array);

// array = array.filter((el) => {
//   //   if (el.length > 7) return el;
//   return el.length > 7;
// });
array = array.filter((el) => el.length > 7);

console.log(array);

const numero = 9;

// if (numero > 8) return "HOLA";
// else return "CHAU";

console.log(numero > 8 ? "HOLA" : "CHAU");

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrayNumeros = arrayNumeros.reduce((prev, actual) => prev + actual);

console.log(arrayNumeros);
