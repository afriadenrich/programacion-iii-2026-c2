const { traerAutos, crearAuto, traerAutoPorId } = require("./auto.controller");
const validarAutoCrear = require("./middlewares/crear.middleware");

const autoRouter = require("express").Router();

autoRouter.get("/", traerAutos);
autoRouter.get("/:id", traerAutoPorId);
autoRouter.post("/", validarAutoCrear, crearAuto);

module.exports = autoRouter;
