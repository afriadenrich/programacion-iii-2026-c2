const express = require("express");

const app = express();

const fileSystem = require("node:fs");

// Guardar un archivo !== que descargarlo

app.get("/descargar/json", (req, res) => {
  const jsonString = `{"clave":"valor","clave2":[99]}`; // CONTENIDO DEL ARCHIVO

  //   fileSystem.writeFileSync("archivo.json", jsonString);

  // DE UN CONTENIDO GENERADO EN EL MOMENTO PARA QUE SE DESCARGUE
  res
    .setHeader(
      "Content-Disposition",
      "attachment; filename=archivoGenerado.json",
    )
    .setHeader("Content-Type", "application/json")
    .send(jsonString);

  // DE UN ARCHIVO GUARDADO, DEVOLVERLO PARA QUE SE DESACARGUE
  //   res.download("archivo.json", (err) => {
  //     console.log(err);
  //     if (!res.hasHeader) {
  //       res.status(500).send("ERROR");
  //     }
  //   });
});

app.listen(3000);
