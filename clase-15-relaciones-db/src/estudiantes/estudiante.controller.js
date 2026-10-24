const { Op } = require("sequelize");
const {
  Estudiante,
  Curso,
  EstudiantesCursos,
} = require("../database/relaciones");

const crearEst = async (req, res) => {
  const { nombre, fechaNacimiento, legajo } = req.body;

  const estudianteCreado = await Estudiante.create({
    nombre: nombre,
    legajo,
    fechaNacimiento: fechaNacimiento,
  });

  res.send(estudianteCreado);
};

const crearEstCurso = async (req, res) => {
  const { idCurso, idEstudiante } = req.body;

  const estudiante = await Estudiante.findByPk(idEstudiante);
  const curso = await Curso.findByPk(idCurso);

  if (estudiante && curso) {
    const relacion = await EstudiantesCursos.create({
      CursoId: idCurso,
      EstudianteId: idEstudiante,
    });
    // estudiante.addCurso(curso);
    res.send({ ok: true });
  } else {
    res.send({ ok: false });
  }
};

const traerEsts = async (req, res) => {
  const estudiantes = await Estudiante.findAll({ order: [["nombre", "ASC"]] });

  res.send(estudiantes);
};

const traerEstPorId = async (req, res) => {
  const id = req.params.id;

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
  crearEstCurso,
};
