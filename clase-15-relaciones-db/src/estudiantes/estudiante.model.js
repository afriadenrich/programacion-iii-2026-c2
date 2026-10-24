const { DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../database/sequelize");

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
  },
  {
    tableName: "estudiantes",
    timestamps: true,
    paranoid: true,
  },
);

// Estudiante.sync();

module.exports = Estudiante;
