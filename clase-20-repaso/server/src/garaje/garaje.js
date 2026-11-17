const { INTEGER, DATEONLY, STRING } = require("sequelize");
const sequelize = require("../database/sequelize");

const Garaje = sequelize.define(
  "Garaje",
  {
    nombre: {
      type: STRING,
    },
  },
  {
    timestamps: true,
    deletedAt: true,
    paranoid: true,
  },
);

module.exports = Garaje;
