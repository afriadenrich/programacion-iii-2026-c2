const express = require("express");
const {
  crearEst,
  eliminarEstPorId,
  modificarEstPorId,
  traerEsts,
  traerEstPorId,
  crearEstCurso,
} = require("./estudiante.controller");
const { validarID } = require("../common/middlewares");

const estRouter = express.Router();

estRouter.get("/", traerEsts);

estRouter.post("/", crearEst);

estRouter.post("/curso", crearEstCurso);

estRouter.get("/:id", validarID, traerEstPorId);

estRouter.put("/:id", validarID, modificarEstPorId);

estRouter.delete("/:id", validarID, eliminarEstPorId);

module.exports = estRouter;
