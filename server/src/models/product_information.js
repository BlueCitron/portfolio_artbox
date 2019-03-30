module.exports = (sequelize, DataTypes) => {
  return sequelize.define('product_information', {
    content: {
      type: DataTypes.TEXT,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
