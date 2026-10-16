class Estudiante {
  id;
  nombre;
  fechaNacimiento;
  legajo;

  constructor({ id, nombre, fechaNacimiento, legajo }) {
    this.id = id;
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.legajo = legajo;
  }
}

module.exports = Estudiante;
