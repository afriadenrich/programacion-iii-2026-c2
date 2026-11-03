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

module.exports = { getPersonajes };
