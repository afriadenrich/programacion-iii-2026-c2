const { Curso, Profesor } = require("../database/relaciones");

async function crear(req, res, next) {
  const curso = await Curso.create(req.body);

  res.json(curso);
}

async function traerTodos(req, res) {
  const cursos = await Curso.findAll({ include: Profesor });

  res.json({ cursos });
}

async function traerPorId(req, res) {
  const curso = await Curso.findByPk(req.params.id, { include: Profesor });

  const profesor = await curso.getProfesor();

  res.json({ curso, profesor });
}

module.exports = { traerTodos, traerPorId, crear };
