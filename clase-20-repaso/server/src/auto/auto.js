const { INTEGER, DATEONLY, STRING } = require("sequelize");
const sequelize = require("../database/sequelize");

const Auto = sequelize.define(
  "Auto",
  {
    marca: {
      type: STRING,
    },
    modelo: {
      type: STRING,
    },
    precio: {
      type: INTEGER,
    },
    fechaDeSalida: {
      type: DATEONLY,
    },
  },
  {
    timestamps: true,
    deletedAt: true,
    paranoid: true,
  },
);

module.exports = Auto;
