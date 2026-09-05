class Usuario {
  nombre;
  #dni;
  #edad;

  constructor(nombre, dni) {
    this.nombre = nombre;
    this.#dni = dni;
    this.#edad = 0;
    this.ALGOQUENOEXISTIA = "AAA";
  }

  get edad() {
    return this.#edad;
  }

  set edad(val) {
    if (typeof val === "number" && val > 0) {
      this.#edad = val;
    }
  }

  algo(params) {
    console.log(params);
  }
}

const usuario1 = new Usuario("Agus", 11234567);
const usuario2 = new Usuario("Nico", 11234568);

console.log(usuario1, usuario2);
console.log(typeof usuario1);

usuario1.edad = 99;
console.log(usuario1.edad);

const usuario3 = {
  nombre: "Fernando",
  dni: 333333,
  edad: 33,
  algo: (params) => console.log(params),
};

console.log(usuario3);
