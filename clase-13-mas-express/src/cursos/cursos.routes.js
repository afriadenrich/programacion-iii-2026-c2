const express = require("express");
const cursoRouter = express.Router();

cursoRouter.get("/", (req, res) => {
  res.send([
    { id: 1, nombre: "Agus" },
    { id: 2, nombre: "Nico" },
  ]);
});

cursoRouter.post("/", (req, res) => {
  res.send(req.body);
});

cursoRouter.get("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

cursoRouter.put("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

cursoRouter.delete("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

module.exports = cursoRouter;
