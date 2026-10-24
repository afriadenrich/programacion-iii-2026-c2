const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:123456@localhost:3307/2026-c2");

module.exports = sequelize;
