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
