const express = require("express");
const profesorRouter = express.Router();

profesorRouter.get("/", (req, res) => {
  res.send([
    { id: 1, nombre: "Agus" },
    { id: 2, nombre: "Nico" },
  ]);
});

profesorRouter.post("/", (req, res) => {
  res.send(req.body);
});

profesorRouter.get("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

profesorRouter.put("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

profesorRouter.delete("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

module.exports = profesorRouter;
