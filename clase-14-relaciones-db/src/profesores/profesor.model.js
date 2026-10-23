const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Profesor = sequelize.define(
  "Profesor",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "profesores",
  },
);

// No posee la relación todavía
module.exports = Profesor;
