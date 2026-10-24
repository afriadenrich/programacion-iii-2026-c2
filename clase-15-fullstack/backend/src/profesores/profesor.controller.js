const { Profesor, Curso } = require("../database/relaciones");

async function crear(req, res) {
  const profe = await Profesor.create(req.body);

  res
    // .setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    // .setHeader("Access-Control-Allow-Headers", "Content-Type")
    .json(profe);
}

async function traerTodos(req, res) {
  const profesores = await Profesor.findAll({ include: Curso });

  res.json(profesores);
}

async function traerPorId(req, res) {
  const profesor = await Profesor.findByPk(req.params.id, { include: Curso });
  const cursos = await profesor.getCursos();

  res.json(profesor, cursos);
}

module.exports = { crear, traerTodos, traerPorId };
