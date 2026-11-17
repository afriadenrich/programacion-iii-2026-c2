const { INTEGER } = require("sequelize");
const sequelize = require("./sequelize");

const GarajeConductor = sequelize.define(
  "GarajeConductor",
  {
    sueldo: { type: INTEGER },
  },
  {
    timestamps: false,
    paranoid: false, // linea innecesaria
  },
);

module.exports = GarajeConductor;
