const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// IMPORT MODELS
const Producer = require("../models/Producer");

const dbConnect = new Sequelize(dbConfig);

Producer.init(dbConnect);

module.exports = dbConnect;
