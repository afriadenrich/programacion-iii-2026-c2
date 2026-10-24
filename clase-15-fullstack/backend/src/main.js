// 1. Importar el framework
const express = require("express");
const estudianteRouter = require("./estudiantes/estudiante.routes");
const profesorRouter = require("./profesores/profesor.routes");
const cursoRouter = require("./cursos/curso.routes");

const cors = require("cors");

const sequelize = require("./database/sequelize");
const { Profesor, Curso, Estudiante } = require("./database/relaciones");

// 2. Crear la instancia
const app = express();

// 3. Configuraciones extra
app.use(express.json());
app.use("/imagenes", express.static("img"));
app.use("/public", express.static("public"));

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    allowedHeaders: "content-type",
  }),
);

// 4. Definir las rutas
app.use("/estudiantes", estudianteRouter);
app.use("/cursos", cursoRouter);
app.use("/profesores", profesorRouter);

// 5. Conectar la instancia al puerto elegido
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El server inició correctamente en el puerto ${PORT}`);
});
