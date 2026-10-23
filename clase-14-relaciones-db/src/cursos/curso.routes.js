const express = require("express");
const cursoRouter = express.Router();

const { traer, crear } = require("./curso.controller");

cursoRouter.get("/", traer);

cursoRouter.post("/", crear);

cursoRouter.get("/:id", traer);

// cursoRouter.put("/:id", );

cursoRouter.delete("/:id", (req, res) => {
  res.send({ id: req.params.id, nombre: "Agus" });
});

module.exports = cursoRouter;
