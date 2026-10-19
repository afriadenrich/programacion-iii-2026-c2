// 3.5 base de datos
const { Sequelize } = require("sequelize");

// URI de conexión
// "dialect://username:password@host:port/database"
const sequelize = new Sequelize("mysql://root:123456@localhost:3307/2026-c2");

// sequelize.sync();

module.exports = sequelize;

// =====================

// hostname: "127.0.0.1" === "localhost"
// puerto: 3307 (lo normal es 3306)
// usuario: "root"
// password: "123456"
// dialecto: "mysql"
// nombre de la db: "2026-c2"

// const sequelize = new Sequelize("2026-c2", "root", "123456", {
//   host: "localhost",
//   port: 3307,
//   dialect: "mysql",
// });

// const sequelize = new Sequelize({
//   dialect: "mysql",
//   host: "localhost",
//   port: 3307,
//   username: "root",
//   password: "123456",
//   database: "2026-c2",
// });

// TESTEAR CONEXIÓN:
// async function testDB() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// testDB();
