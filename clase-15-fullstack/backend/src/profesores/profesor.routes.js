const express = require("express");
const profesorRouter = express.Router();
const { crear, traerTodos, traerPorId } = require("./profesor.controller");

profesorRouter.get("/", traerTodos);

profesorRouter.post("/", crear);

profesorRouter.get("/:id", traerPorId);

// profesorRouter.options("/", (req, res) => {
//   res
//     .setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
//     .setHeader("Access-Control-Allow-Headers", "Content-Type")
//     .sendStatus(204);
// });

module.exports = profesorRouter;
