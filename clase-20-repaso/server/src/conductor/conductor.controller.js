const { where } = require("sequelize");
const { Conductor } = require("../database/relaciones");
const { hashear, validar } = require("../utils/bcrypt");

const crearConductor = async (req, res) => {
  // const password = req.body.password;

  // const hash = hashear(password);
  const conductor = await Conductor.create({
    ...req.body /*, contrasenia: hash*/,
    fotoDePerfil: req.file.filename,
  });

  res.json(conductor);
};

const validarConductor = async (req, res) => {
  const { email, password } = req.body;

  const conductor = await Conductor.findOne({ where: { email: email } });

  // validar la contraseña
  const hash = conductor.contrasenia;

  const esValido = validar(password, hash);

  conductor.contrasenia = null; // evito devolver la contraseña

  if (esValido) {
    return res.json(conductor);
  } else {
    throw new Error("Error al validar usuario");
  }
};

module.exports = { crearConductor, validarConductor };
