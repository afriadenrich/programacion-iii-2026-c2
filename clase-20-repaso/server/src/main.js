const express = require("express");

const app = express();

// CONFIG
app.use(express.json());
app.use("/imagenes", express.static("public"));

if ((process.env.NODE_ENV = "development")) {
  const sequelize = require("./database/sequelize");
  sequelize.sync({ alter: true });
}

// ROUTES
const autoRouter = require("./auto/auto.routes");

app.use("/autos", autoRouter);
const conductorRouter = require("./conductor/conductor.routes");

app.use("/conductor", conductorRouter);

// ERROR MW
const errorMW = require("./middlewares/error.middleware");
app.use(errorMW);

// START
app.listen(3000, () => {
  console.log("Funcionando");
});
