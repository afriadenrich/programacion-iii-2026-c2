let array4 = [0, 10, 23, 1, 2, 165, 3, 6];

for (let i = 0; i < array4.length; i++) {
  for (let j = 0; j < array4.length; j++) {
    // si i > j swap, sino no
    const priemro = array4[i];
    const segundo = array4[j];

    if (priemro < segundo) {
      array4[i] = segundo;
      array4[j] = priemro;
    }
  }
}

console.log(array4);

let array65 = [0, 10, 23, 1, 2, 165, 3, 6];

// si da negativo reordena. Da negativo cuando primero es menor que segundo
array65.sort((primero, segundo) => {
  return primero - segundo;
});

console.log(array65);

console.log(window);
