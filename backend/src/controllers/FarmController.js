const Producer = require("../models/Producer");
const Farms = require("../models/Farms");

module.exports = {
  async store(req, res) {
    const { producer_id } = req.params;
    const { name_farm } = req.body;

    const producer = await Producer.findByPk(producer_id);

    if (!producer) {
      return res.status(400).json({ error: "Producer not found" });
    }

    const farm = await Farms.create({ name_farm, producer_id });

    return res.json(farm);
  },
};
