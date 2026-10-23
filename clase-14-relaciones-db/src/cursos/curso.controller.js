const { Curso, Profesor } = require("../database/relaciones");

async function traer(req, res) {
  const curso = await Curso.findByPk(2, { include: Profesor });

  const profesor = await curso.getProfesor();

  res.json({ curso, profesor });
}

async function crear(req, res) {
  const curso = await Curso.create({
    nombre: "progra",
    cuatrimestre: 2,
    idProfesor: 1,
  });

  res.json(curso);
}

module.exports = { traer, crear };
