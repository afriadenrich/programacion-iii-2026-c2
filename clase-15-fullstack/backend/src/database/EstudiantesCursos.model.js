const { DataTypes, INTEGER } = require("sequelize");
const sequelize = require("./sequelize");

const EstudiantesCursos = sequelize.define(
  "EstudiantesCursos",
  {
    nota: {
      type: INTEGER,
    },
    cursoEnAnio: {
      type: INTEGER,
    },
  },
  {},
);

module.exports = EstudiantesCursos;
