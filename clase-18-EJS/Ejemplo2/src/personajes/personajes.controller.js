const { traerPersonajes } = require("./personajes.service");
const ejs = require("ejs");

/**
 *
 * @param {*} req
 * @param {import("express").Response} res
 */
const getPersonajes = async (req, res) => {
  const { arrPersonajes, previous, next } = await traerPersonajes();

  res.render("personajes/listado", {
    arrayPersonajes: arrPersonajes,
    previous: previous,
    next: next,
    cache: true,
  });
};

/**
 *
 * @param {*} req
 * @param {import("express").Response} res
 */
const postPersonajes = async (req, res) => {
  console.log(req.body);
  console.log("Guardo el personaje");
  res.redirect("/personajes");
};

const formPersonajes = async (req, res) => {
  res.render("personajes/formulario");
};

module.exports = { getPersonajes, postPersonajes, formPersonajes };
