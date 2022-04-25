const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  "test_bd",
  "postgres",
  "2105455",
  {
    dialect: "postgres",
    host: "localhost",
    port: 5432
  }
);