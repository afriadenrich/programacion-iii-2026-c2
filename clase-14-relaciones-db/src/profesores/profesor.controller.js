const { Profesor } = require("../database/relaciones");

async function crear(req, res) {
  const profe = await Profesor.create({ nombre: "Agus", apellido: "Agus" });

  res.json(profe);
}

module.exports = { crear };
