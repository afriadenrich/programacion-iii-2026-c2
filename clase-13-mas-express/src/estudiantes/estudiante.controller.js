const Estudiante = require("./estudiante.model");

const traerEsts = (req, res) => {
  res.send([
    { id: 1, nombre: "Agus" },
    { id: 2, nombre: "Nico" },
  ]);
};

const crearEst = (req, res) => {
  const estudianteCreado = new Estudiante(req.body);
  res.send(estudianteCreado);
};

const traerEstPorId = (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
};

const modificarEstPorId = (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
};

const eliminarEstPorId = (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
};

module.exports = {
  crearEst,
  traerEstPorId,
  traerEsts,
  modificarEstPorId,
  eliminarEstPorId,
};
