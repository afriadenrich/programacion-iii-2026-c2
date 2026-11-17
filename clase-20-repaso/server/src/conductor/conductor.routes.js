const upload = require("../utils/multer");
const { crearConductor, validarConductor } = require("./conductor.controller");

const conductorRouter = require("express").Router();

conductorRouter.post("/crear", upload.single("fotito"), crearConductor);
conductorRouter.post("/validar", validarConductor);

module.exports = conductorRouter;
