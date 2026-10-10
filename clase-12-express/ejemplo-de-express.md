ARRANCAR EL SERVER CON: node --watch .\main.js 


# Ejemplo de express

- Common JS, NO Ecmascripts
- Para importar: require("ruta)
- Para exportar: module.exports = variableAExportar;

``
// Importa express
const express = require("express");

// express() va a funcionar como constructor
const app = express();

// puerto para desarrollo
const port = 3000;


192.127.0.1:5500  -> live serverZ
localhost:5500  -> live serverZ
192.127.0.1:3306  -> mysql
localhost:3306  -> mysql
192.127.0.1:3000  -> express
localhost:3000  -> express
142.251.152.119:443 -> google por https

// Una vez que configuré todo, defino las RUTAS.

http://localhost/ por GET

app.get("/", (request, response) => {
  response.send("Hello World!");
});

http://localhost/usuarios por GET
app.get("/usuarios", (req, res) => {
    res.send([{usuario1}, {usuario2}])
})

app.get("/puestos", (req, res) => {
    const page = req.query.page
    const limit = req.query.limit
    
    res.send([])
})



// FINAL
// Que la app quede ESCUCHANDO en el puerto elegido (3000 en este caso)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); // Se ejecuta cuando la app arranca
});
``

