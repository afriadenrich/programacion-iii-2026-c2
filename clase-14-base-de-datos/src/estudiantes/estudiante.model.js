const { DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../database/sequelize");

// DEFINIR UN MODELO
// =====================

const Estudiante = sequelize.define(
  "Estudiante",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
    },
    legajo: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    historialCrediticio: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "estudiantes",
  },
);

Estudiante.sync({ alter: true });

module.exports = Estudiante;
