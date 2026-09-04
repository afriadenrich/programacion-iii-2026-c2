// Una función se puede definir en un archivo y utilizarla
// O se puede definir y guardar en una VARIABLE.
// El resultado es exacactamente el mismo y las funciones se pueden escribir de muchas formas distintas porque la sintaxis lo permite

function sumar0(param1, param2) {
  return param1 + param2;
}

const resultado = sumar0(2, 5);

console.log(resultado);

// Podemos guardar en variable y pasar valores por defecto
const sumar1 = function (param1 = 88, param2 = 12) {
  return param1 + param2;
};

const resultado2 = sumar1(2);

console.log(resultado2);

// arrow function
const sumar2 = (param1, param2) => {
  return param1 + param2;
};

// arrow function con retorno implícito
const sumar3 = (param1, param2) => param1 + param2;

const bonus = (a) => console.log(a);

(a) => console.log(a);

bonus("Hola mundo");
