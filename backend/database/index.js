const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const dbConnect = new Sequelize(dbConfig);

module.exports = dbConnect;
