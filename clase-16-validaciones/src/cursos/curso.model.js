const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Curso = sequelize.define(
  "Curso",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    cuatrimestre: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "cursos",
  },
);

module.exports = Curso;
