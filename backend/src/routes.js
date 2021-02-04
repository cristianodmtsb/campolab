const express = require("express");
//IMPORT CONTROLLERS
const ProducerController = require("./controllers/ProducerController");
const FarmController = require("./controllers/FarmController");

const routes = express.Router();

routes.get("/producers", ProducerController.index);
routes.post("/producer", ProducerController.store);

routes.post("/producers/:producer_id/farms", FarmController.store);

module.exports = routes;
