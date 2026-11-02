const { getPersonajes } = require("./personajes.controller");

const personajesR = require("express").Router();

personajesR.get("/", getPersonajes);

module.exports = personajesR;
