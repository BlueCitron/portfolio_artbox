module.exports = (sequelize, DataTypes, db) => {
  return sequelize.define('ordered_product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
  }, {
    timestamps: true,
    // paranoid: true,
  });
}
