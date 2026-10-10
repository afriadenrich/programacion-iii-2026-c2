// 1. importar express
const express = require("express");
// 2. generar app
const app = express();

// 2.1. configurar que mi app reciba los body en JSON.
app.use(express.json());

// CRUD HTTP (GET, PUT/PATCH, DELETE, POST)
// traer todos los autos

app.get("/autos", (req, res) => {
  res.send("Ejecuta un get");
});
// traer un auto por ID. nota: :id es un paráetro de ruta
app.get("/autos/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ejecuta un get con id ${id}`);
});
// crear un auto
app.post("/autos", (req, res) => {
  res.send(req.body);
});
// modificar un auto entero
app.put("/autos/:id", (req, res) => {
  const { marca } = req.query;
  res.send("Ejecuta un put");
});
// modificar algo en particular
app.patch("/autos", (req, res) => {
  res.send("Ejecuta un patch");
});
// eliminar un auto
app.delete("/autos/:id", (req, res) => {
  res.send("Ejecuta un delete");
});

// 3. escuchar app
app.listen(3000, () => {
  console.log("arrancó en el puerto 3000");
});

/**


app
  .route("/autos")
  .get((req, res) => {
    res.send("Ejecuta un get");
  })

  .post((req, res) => {
    res.send("Ejecuta un post");
  });

 */
