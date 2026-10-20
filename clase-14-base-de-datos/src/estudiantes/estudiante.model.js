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
    // eliminado: {
    //   type: DataTypes.BOOLEAN, // 1, 0, null
    // },
    // fechaDeEliminación: {
    //   type: DataTypes.DATE, // Fecha (true), null (false)
    // },
  },
  {
    tableName: "estudiantes",
    timestamps: true,
    // createdAt: "creadoEn",
    // updatedAt: "modificadoEn", // false
    paranoid: true,
  },
);

Estudiante.sync({ alter: true });

module.exports = Estudiante;
