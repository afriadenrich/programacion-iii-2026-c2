const express = require("express");
const profesorRouter = express.Router();
const { crear, traerTodos, traerPorId } = require("./profesor.controller");

profesorRouter.get("/", traerTodos);

profesorRouter.post("/", crear);

profesorRouter.get("/:id", traerPorId);

module.exports = profesorRouter;
