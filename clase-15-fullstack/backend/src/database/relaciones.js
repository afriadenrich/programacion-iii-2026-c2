const Profesor = require("../profesores/profesor.model");
const Curso = require("../cursos/curso.model");
const Estudiante = require("../estudiantes/estudiante.model");
const sequelize = require("./sequelize");
const EstudiantesCursos = require("./EstudiantesCursos.model");

Profesor.hasMany(Curso, {
  foreignKey: "idProfesor",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});
Curso.belongsTo(Profesor, {
  foreignKey: "idProfesor",
  onDelete: "RESTRICT",
  onUpdate: "CASCADE",
});

// async function sync() {
//   await Profesor.sync({ force: true });
//   await Curso.sync({ force: true });
// }

// sync();

// MUCHO A MUCHOS

Curso.belongsToMany(Estudiante, { through: "CursosEstudiantes" });
Estudiante.belongsToMany(Curso, { through: "CursosEstudiantes" });

Curso.belongsToMany(Estudiante, { through: EstudiantesCursos });
Estudiante.belongsToMany(Curso, { through: EstudiantesCursos });

async function syncMuchos() {
  await sequelize.sync({ alter: true });
}

syncMuchos();

module.exports = {
  Curso,
  Profesor,
  Estudiante,
  EstudiantesCursos,
};
