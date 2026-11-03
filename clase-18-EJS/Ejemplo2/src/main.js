const express = require("express");
const path = require("node:path");
const personajesR = require("./personajes/personajes.routes");

const app = express();

app.use("/", express.static("public"));
app.set("view engine", "ejs");
// G:/progra-3/clase-18/ejemplo2/src / templates
app.set("views", path.join(__dirname, "templates"));
app.set("view options", { rmWhitespace: true, cache: true });
app.enable("view cache");
app.use("/personajes", personajesR);

app.get("/ejs/:nombre", (req, res) => {
  const nombre = req.params.nombre;

  res.render("index", { name: nombre });
});

app.listen(3000, () => {
  console.log("arranca");
});
