const express = require("express");
//IMPORT CONTROLLERS
const ProducerController = require("../controllers/ProducerController");

const routes = express.Router();

routes.post("/producer", ProducerController.store);

module.exports = routes;
