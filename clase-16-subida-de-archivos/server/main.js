const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const upload = require("./multer");
const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
  }),
);
app.use(express.json());
app.use(morgan("dev"));
app.use("/imagenes", express.static("img"));

app.post("/subir-imagen", upload.single("perfil"), (req, res) => {
  console.log(`${req.method} ${req.url}`);

  console.log(req.file);

  res.json({
    imagen: `http://localhost:3000/imagenes/${req.file.filename}`, // -> Esto va a la DB
    tamanio: req.file.size,
  });
});

app.listen(process.env.PORT, () => {
  console.log("Arrancó el server");
});
