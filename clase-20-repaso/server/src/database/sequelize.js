const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.SEQUELIZE_URI);

module.exports = sequelize;
