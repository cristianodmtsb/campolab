const express = require("express");
//IMPORT CONTROLLERS
const ProducerController = require("./controllers/ProducerController");
const FarmController = require("./controllers/FarmController");

const routes = express.Router();

//PRODUCERS
routes.get("/producers", ProducerController.index);
routes.post("/producer", ProducerController.store);
routes.put("/producers/:producer_id", ProducerController.update);
routes.delete("/producers/:producer_id", ProducerController.delete);

//FARMS
routes.get("/producers/:producer_id/farms", FarmController.index);
routes.post("/producers/:producer_id/farms", FarmController.store);

module.exports = routes;
