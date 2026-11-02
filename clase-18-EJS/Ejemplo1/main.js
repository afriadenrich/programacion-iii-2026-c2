const express = require("express");

const app = express();

const listado = ["A", "B", "C", "D"];

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.set("view engine", "ejs");
app.set("views", "./templates");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.json({ estado: "funcionando" });
});

app.get("/listado", (req, res) => {
  let listadoHTML = "";

  for (let el of listado) {
    listadoHTML += `<li>${el}</li>`;
  }

  res.setHeader("Content-Type", "text/html").send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Ruta /listado</title>
        </head>
        <body>
          <h1>Listado</h1>
          <ul>
          ${listadoHTML}
          </ul>

          <button id="boton">Botón</button>

          <script src="/public/index.js">
            
          </script>
        </body>
      </html>
      `);
});

app.get("/ejemplo/:nombre", (req, res) => {
  const nombre = req.params.nombre;

  if (nombre.length > 2) {
    res.send("<h2>" + nombre + "</h2>");
  } else {
    res.send("<h2>Sin nombre</h2>");
  }
});

app.get("/ejs/:nombre", (req, res) => {
  const nombre = req.params.nombre;

  res.render("index", { name: nombre });
});

app.listen(3000, () => {
  console.log("arranca");
});
