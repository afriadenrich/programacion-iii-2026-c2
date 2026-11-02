const getPersonajes = (req, res) => {
  res.render("personajes/listado", {
    arrayPersonajes: [{ nombre: "agus" }, { nombre: "nico" }],
  });
};

module.exports = { getPersonajes };
