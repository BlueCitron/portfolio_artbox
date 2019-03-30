module.exports = (sequelize, DataTypes) => {
  return sequelize.define('delivery', {
    content: {
      type: DataTypes.STRING(400),
      allowNull: false,
      required: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
}
