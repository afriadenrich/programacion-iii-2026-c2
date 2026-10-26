const express = require("express");
const profesorRouter = express.Router();
const { crear, traerTodos, traerPorId } = require("./profesor.controller");
const { validarNombreApellido } = require("./profesor.middleware");
const { validarID } = require("../common/middlewares");

profesorRouter.get("/", traerTodos);

// profesorRouter.post("/", validarNombreApellido);

profesorRouter.post("/", validarNombreApellido, crear);

profesorRouter.get("/:id", validarID, traerPorId);

module.exports = profesorRouter;
