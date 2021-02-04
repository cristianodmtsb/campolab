const Producer = require("../models/Producer");

module.exports = {
  //SHOW ALL
  async index(req, res) {
    const producers = await Producer.findAll();
    return res.json(producers);
  },
  //CREATE
  async store(req, res) {
    const { name, email, phone } = req.body;

    const producer = await Producer.create({ name, email, phone });

    return res.json(producer);
  },
  //UPDATE
  async update(req, res) {
    const { producer_id } = req.params;
    const { name, email, phone } = req.body;

    const producer = await Producer.update(
      { name, email, phone },
      { where: { id: producer_id } }
    );

    return res.json(producer);
  },
  //DELETE
  async delete(req, res) {
    const { producer_id } = req.params;

    const producer = await Producer.findByPk(producer_id);

    if (!producer) {
      return res.status(400).json({ error: "Producer not found" });
    }

    await Producer.destroy({ where: { id: producer_id } });

    return res.json();
  },
};
