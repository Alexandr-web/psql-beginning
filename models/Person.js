const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Person = sequelize.define("person", {
  name: {
    type: DataTypes.STRING
  },
  surname: {
    type: DataTypes.STRING
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { tableName: "person" });

module.exports = Person;