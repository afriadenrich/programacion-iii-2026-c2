// 1. Importar el framework
const express = require("express");
const estudianteRouter = require("./routers/estudiante.routes");
const profesorRouter = require("./routers/profesores.routes");
const cursoRouter = require("./routers/cursos.routes");

// 2. Crear la instancia
const app = express();

// 3. Configuraciones extra
app.use(express.json());

// 4. Definir las rutas
app.use("/estudiantes", estudianteRouter);
app.use("/cursos", cursoRouter);
app.use("/profesores", profesorRouter);

// 5. Conectar la instancia al puerto elegido
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`El server inició correctamente en el puerto ${PORT}`);
});
