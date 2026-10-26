// 1. Importar el framework
const express = require("express");
const estudianteRouter = require("./estudiantes/estudiante.routes");
const profesorRouter = require("./profesores/profesor.routes");
const cursoRouter = require("./cursos/curso.routes");

const sequelize = require("./database/sequelize");
const { default: z } = require("zod");

// 2. Crear la instancia
const app = express();

// 3. Configuraciones extra
app.use(express.json());
app.use("/imagenes", express.static("img"));
app.use("/public", express.static("public"));

// Ejemplo de un middleware global que aplica a todas las rutas de abajo y ejecuta un console log ANTES de entrar a las rutas
app.use((req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

// 4. Definir las rutas
app.use("/estudiantes", estudianteRouter);
app.use("/cursos", cursoRouter);
app.use("/profesores", profesorRouter);

// 4.5 middleware global de errores
app.use((err, req, res, next) => {
  if (err instanceof z.ZodError) {
    res.status(400).json(err.issues);
  }

  res.status(500).send({ mensaje: "Error desconocido" });
});

// 5. Conectar la instancia al puerto elegido
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El server inició correctamente en el puerto ${PORT}`);
});
