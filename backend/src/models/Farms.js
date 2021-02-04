const { Model, DataTypes } = require("sequelize");

class Farms extends Model {
  static init(connection) {
    super.init(
      {
        name_farm: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Producer, {
      foreignKey: "producer_id",
      as: "producer",
    });
  }
}

module.exports = Farms;
