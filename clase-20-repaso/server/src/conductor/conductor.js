const { INTEGER, DATEONLY, STRING } = require("sequelize");
const sequelize = require("../database/sequelize");
const { hashear } = require("../utils/bcrypt");
const { hash } = require("node:crypto");

const Conductor = sequelize.define(
  "Conductor",
  {
    nombre: {
      type: STRING,
    },
    email: {
      type: STRING,
    },
    fotoDePerfil: {
      type: STRING,
    },
    contrasenia: {
      type: STRING,
      set(val) {
        console.log(val);
        this.setDataValue("contrasenia", hashear(val));
      },
    },
    fechaDeNacimiento: {
      type: DATEONLY,
    },
  },
  {
    timestamps: true,
    deletedAt: true,
    paranoid: true,
  },
);

module.exports = Conductor;
