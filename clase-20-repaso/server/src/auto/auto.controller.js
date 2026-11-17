const { Auto, Conductor, Garaje } = require("../database/relaciones");

const traerAutos = async (req, res) => {
  const autos = await Auto.findAll({
    include: {
      model: Conductor,
      include: {
        model: Garaje,
      },
      attributes: { exclude: ["contrasenia"] },
    },
  });

  res.json(autos);
};

const traerAutoPorId = async (req, res) => {
  const auto = await Auto.findByPk(req.params.id);

  const conductorDelAuto = await auto.getConductor();
  const garajeDelAuto = await auto.getGaraje();

  res.json({
    auto,
    conductorDelAuto,
    garajeDelAuto,
  });
};

const crearAuto = async (req, res) => {
  const autoCreado = await Auto.create(req.body);

  res.json(autoCreado);
};

module.exports = { traerAutos, crearAuto, traerAutoPorId };
