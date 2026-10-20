const { Op } = require("sequelize");
const Estudiante = require("./estudiante.model");

const crearEst = async (req, res) => {
  const { nombre, fechaNacimiento, legajo } = req.body;

  // Guardar el body en la DB
  const estudianteCreado = await Estudiante.create({
    nombre: nombre,
    legajo,
    fechaNacimiento: fechaNacimiento,
  });

  res.send(estudianteCreado);
};

const traerEsts = async (req, res) => {
  const estudiantes = await Estudiante.findAll({ order: [["nombre", "ASC"]] }); // SELECT * FROM estudiantes
  // const estudiantes = await Estudiante.findOne({
  //   where: {
  //     legajo: { [Op.gt]: 123456 },
  //     // legajo: 123456,
  //   },
  // }); // SELECT * FROM estudiantes WHERE legajo > 123456

  res.send(estudiantes);
};

const traerEstPorId = async (req, res) => {
  const id = req.params.id;

  // const estudiante_alternativa = await Estudiante.findOne({ where: { id } });
  const estudiante = await Estudiante.findByPk(id);

  res.send(estudiante);
};

const modificarEstPorId = async (req, res) => {
  const { nombre, fechaNacimiento, legajo } = req.body;
  const { id } = req.params;

  let datosAModificar = {};

  if (nombre) {
    datosAModificar.nombre = nombre;
  }
  if (fechaNacimiento) {
    datosAModificar.fechaNacimiento = fechaNacimiento;
  }
  if (legajo) {
    datosAModificar.legajo = legajo;
  }

  const modificado = await Estudiante.update(datosAModificar, {
    where: { id },
  });

  res.send(modificado);
};

const eliminarEstPorId = async (req, res) => {
  const eliminado = await Estudiante.destroy({ where: { id: req.params.id } });

  res.send(eliminado);
};

module.exports = {
  crearEst,
  traerEstPorId,
  traerEsts,
  modificarEstPorId,
  eliminarEstPorId,
};
