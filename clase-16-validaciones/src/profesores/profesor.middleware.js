function validarNombreApellido(req, res, NEXT) {
  const { nombre, apellido } = req.body;

  if (
    typeof nombre === "string" &&
    typeof apellido === "string" &&
    nombre.length >= 3 &&
    apellido.length >= 3 &&
    nombre.length <= 16 &&
    apellido.length <= 16
  ) {
    NEXT(); // Si no se llama, no se pasa al próximo método y se debe cortar todo el circuito
  } else {
    res.status(400).send({ mensaje: "Mandaste mal los datos" });
  }
}

module.exports = { validarNombreApellido };
