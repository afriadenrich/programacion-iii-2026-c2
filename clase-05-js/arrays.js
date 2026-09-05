console.log("===== ARRAYS =====");
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// for que itera por índice
for (let i = 0; i < arrayNumeros.length; i++) {
  const element = arrayNumeros[i];
  console.log(element);
}

// for OF
// itera por posición
// 'por cada elemento del array'
// 'for      item      of   array'
for (element of arrayNumeros) {
  console.log(element);
}

function paraElForEach(element, i, array) {
  console.log(element, i, array);
}

// forEach/
// por cada elemento, llamar a una función que reciba como parámetro ese elemento
arrayNumeros.forEach(paraElForEach);

// internamente hace:
// for (let i = 0; i < arrayNumeros.length; i++) {
//     paraElForEach(arrayNumeros[i], i, arrayNumeros)
// }

arrayNumeros.forEach((v, i, arr) => console.log(v, i, arr));

// la función que recibe se llama CALLBACK -> es una función que se pasa a otra función, para que esa otra función sea la que la LLAME DE VUELTA

arrayNumeros.sort((a, b) => a - b);

// Agregar n cantidad de elementos
arrayNumeros.push(999, 123, 34, 0);

console.log(arrayNumeros);

let elementoQuitado = arrayNumeros.pop();
console.log(elementoQuitado, arrayNumeros);

elementoQuitado = arrayNumeros.shift();
console.log(elementoQuitado, arrayNumeros);

// Agregar n cantidad de elementos al princpio
arrayNumeros.unshift(999, 123, 34, 0);

console.log(arrayNumeros);

console.log(arrayNumeros.join(","));

console.log(arrayNumeros.indexOf(8));
console.log(arrayNumeros.lastIndexOf(999));
console.log(arrayNumeros.includes(8));
console.log(arrayNumeros.length);
// Saca el elemento en el índice 5
console.log(arrayNumeros.splice(5, 1));
// Saca el elemento en el índice 5 y 6
console.log(arrayNumeros.splice(5, 2));
