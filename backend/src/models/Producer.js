const { Model, DataTypes } = require("sequelize");

class Producer extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Farms, {
      foreignKey: "producer_id",
      as: "farms",
    });
  }
}

module.exports = Producer;
