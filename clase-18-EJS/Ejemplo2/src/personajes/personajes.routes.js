const multer = require("multer");
const {
  getPersonajes,
  postPersonajes,
  formPersonajes,
} = require("./personajes.controller");

const personajesR = require("express").Router();

personajesR.get("/", getPersonajes);
personajesR.get("/form", formPersonajes);
personajesR.post("/guardar", multer().none(), postPersonajes);

module.exports = personajesR;
