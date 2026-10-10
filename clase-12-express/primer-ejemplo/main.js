const express = require("express");
const puestosDeTrabajo = require("./data.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ nombre: "Programador", salario: "poco" });
});

app.get("/puestos", (peticion, respuesta) => {
  const parametrosQuery = peticion.query;
  const limit = Number.parseInt(parametrosQuery.limit);
  const page = Number.parseInt(parametrosQuery.page);

  respuesta.send(puestosDeTrabajoFiltrados(limit, page));
});

app.get("/puestos/:nombre", (req, res) => {
  const nombreBuscado = req.params.nombre.toLowerCase();

  const puestoEncontrado = puestosDeTrabajo.find((puesto) => {
    const nombrePuesto = puesto.nombre.toLowerCase();

    return nombrePuesto.includes(nombreBuscado);
  });

  if (puestoEncontrado) {
    res.json(puestoEncontrado);
  } else {
    res.status(404).json({
      error:
        "No se encontró ningún puesto de trabajo con el nombre " +
        nombreBuscado,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// node main.js para comenzar la ejecución
// CONTROL + C en el teclado para cortar la ejecución

// Otras funcioens
function puestosDeTrabajoFiltrados(limit, page) {
  let startIndex;

  startIndex = (page - 1) * limit;
  startIndex = Math.max(0, startIndex);
  const endIndex = startIndex + limit;
  const results = puestosDeTrabajo.slice(startIndex, endIndex);
  return results;
}
