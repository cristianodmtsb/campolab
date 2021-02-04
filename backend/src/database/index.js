const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

// IMPORT MODELS
const Producer = require("../models/Producer");
const Farms = require("../models/Farms");

const dbConnect = new Sequelize(dbConfig);

Producer.init(dbConnect);
Farms.init(dbConnect);

Producer.associate(dbConnect.models);
Farms.associate(dbConnect.models);

module.exports = dbConnect;
