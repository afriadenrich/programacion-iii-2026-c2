const nombre = "agus";
const apellido = "frich";
const dondeVive = "En su casa";

const todo = `Hola, mi nombre es ${nombre} ${apellido} y soy de ${dondeVive}`;

console.log(todo);

/* 
Resolverlo con bucle For, se pueden mostrar los números por consola o devolver un array
para mostrarlos.
console.log(encontrarPrimos(10)); // Primos: [2, 3, 5, 7]
*/

// divisible por 1 y por si mismo.
function esPrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function encontrarPrimosHasta(n) {
  const primos = [];

  for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) {
      primos.push(i);
    }
  }

  console.log(primos);
}

// encontrarPrimosHasta(10);
// encontrarPrimosHasta(100);
// encontrarPrimosHasta(50);

// 5- Convertir arrays anidados en una array plano
// console.log(flattenArray([1, [2, 3], [4, [5]]])); // Salida: [1, 2, 3, 4, 5]

const arrayAnidado1 = [1, [2, 3], [4, [5]]]; // [1] [2,3] [4] [5]  // [1,2,3,4,5]
const arrayAnidado2 = [1, [2, 3], [4, [5, [6, [7, 8]], 9]]]; // [1,2,3,4,5,6,7,8,9]

function flattenArray(anidado) {
  let plano = [];

  for (let i = 0; i < anidado.length; i++) {
    if (Array.isArray(anidado[i])) {
      const planoInterno = flattenArray(anidado[i]); //  [2, 3] [4] [5]
      //   plano = plano.concat(planoInterno); // Une dos arrays en uno
      plano = [...plano, ...planoInterno];
      // Spread operator -> operador de separación / "Desparrame" -> ...
    } else {
      plano.push(anidado[i]);
    }
  }

  return plano;
}

const resultadoPlano = flattenArray(arrayAnidado1);

// console.log(resultadoPlano);

// Spread operator -> operador de separación / "Desparrame" -> ...
const array = [1, 2, 3, 4, 5, 6];

console.log(...array);

function mostrar(...array) {
  array.forEach((e) => console.log(e));
}

// mostrar(2, 3, 4, 5, 6, 88);
// console.log(2, 3, 4, 5, 6, 88);

/*
6- Balancear (que sea simétrico) un string de (), []
y {}
Usar un array como a modo de stack.
Probar con:
● "({[]})" // Output true
● "([)]" // Output false
● "{[()]}" // Output true
● "({[})]" // Output false
*/
function balancear(cadena) {
  const stack = []; // LIFO -> last in first out -> el último en entrar es el primero en salir

  for (caracter of cadena) {
    if (caracter === "(" || caracter === "{" || caracter === "[") {
      stack.push(caracter);
    } else if (caracter === ")" || caracter === "}" || caracter === "]") {
      const ultimo = stack.pop();

      if (
        (ultimo === "(" && caracter !== ")") ||
        (ultimo === "{" && caracter !== "}") ||
        (ultimo === "[" && caracter !== "]")
      ) {
        return false;
      }
    } else {
      return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

console.log(balancear("({[(){}{}]})"));
console.log(balancear("([)]"));
console.log(balancear("{[()]}"));
console.log(balancear("({[})]"));

// ({[]})

// 1. ( si abre guardo
// 2. { guardo
// 3. [ guardo
// stack = ["(", "{", "["];
// 4. ] si cierra compruebo que el último que abrió concide. Si coincide, descarto los dos
// stack = ["(", "{"];
// ultimo era =  "["  "]"
// 5. } cierra y coincide. Saco los dos
// stack = ["(",];
// ultimo =  "{" caracter = "}"
// 6. ) cierra y coincide. Saco los dos
// stack = [];
// ultimo = "(" car ")"

// stack = []
