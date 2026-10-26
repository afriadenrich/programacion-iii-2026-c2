const express = require("express");
const cursoRouter = express.Router();

const { traer, crear, traerPorId, traerTodos } = require("./curso.controller");
const { crearCursoMW, atraparErrorMW } = require("./curso.middleware");
const { validarID } = require("../common/middlewares");

cursoRouter.get("/", traerTodos);

cursoRouter.post("/", crearCursoMW, crear, atraparErrorMW);

cursoRouter.get("/:id", validarID, traerPorId);

module.exports = cursoRouter;
