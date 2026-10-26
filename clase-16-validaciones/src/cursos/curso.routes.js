const express = require("express");
const cursoRouter = express.Router();

const { traer, crear, traerPorId, traerTodos } = require("./curso.controller");

cursoRouter.get("/", traerTodos);

cursoRouter.post("/", crear);

cursoRouter.get("/:id", traerPorId);

module.exports = cursoRouter;
