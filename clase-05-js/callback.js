let array = [0, 10, 23, 1, 2, 165, 3, 6];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    // si i > j swap, sino no
    const priemro = array[i];
    const segundo = array[j];

    if (priemro < segundo) {
      array[i] = segundo;
      array[j] = priemro;
    }
  }
}

console.log(array);

let array2 = [0, 10, 23, 1, 2, 165, 3, 6];

// si da negativo reordena. Da negativo cuando primero es menor que segundo
array2.sort((primero, segundo) => {
  return primero - segundo;
});

console.log(array2);
