const express = require("express");
const profesorRouter = express.Router();
const { crear } = require("./profesor.controller");

profesorRouter.get("/", (req, res) => {
  res.send([
    { id: 1, nombre: "Agus" },
    { id: 2, nombre: "Nico" },
  ]);
});

profesorRouter.post("/", crear);

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
