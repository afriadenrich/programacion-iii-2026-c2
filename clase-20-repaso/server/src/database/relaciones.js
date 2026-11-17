const Auto = require("../auto/auto");
const Conductor = require("../conductor/conductor");
const Garaje = require("../garaje/garaje");
const GarajeConductor = require("./GarajeConductor");

Auto.belongsTo(Conductor, {
  foreignKey: "idConductor",
}); // auto.ConductorId
Conductor.hasMany(Auto, {
  foreignKey: "idConductor",
  onDelete: "CASCADE",
});

Auto.belongsTo(Garaje);
Garaje.hasMany(Auto, {
  onDelete: "SET NULL",
});

Garaje.belongsToMany(Conductor, { through: GarajeConductor });
Conductor.belongsToMany(Garaje, { through: GarajeConductor });

module.exports = { Auto, Conductor, Garaje, GarajeConductor };
