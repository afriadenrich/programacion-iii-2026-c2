const express = require("express");
const {
  crearEst,
  eliminarEstPorId,
  modificarEstPorId,
  traerEsts,
  traerEstPorId,
  crearEstCurso,
} = require("./estudiante.controller");

const estRouter = express.Router();

estRouter.get("/", traerEsts);

estRouter.post("/", crearEst);

estRouter.post("/curso", crearEstCurso);

estRouter.get("/:id", traerEstPorId);

estRouter.put("/:id", modificarEstPorId);

estRouter.delete("/:id", eliminarEstPorId);

module.exports = estRouter;
