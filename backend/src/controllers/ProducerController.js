const Producer = require("../models/Producer");

module.exports = {
  async index(req, res) {
    const producers = await Producer.findAll();
    return res.json(producers);
  },

  async store(req, res) {
    const { name, email, phone } = req.body;

    const producer = await Producer.create({ name, email, phone });

    return res.json(producer);
  },
};
