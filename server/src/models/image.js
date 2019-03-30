module.exports = (sequelize, DataTypes) => {
  return sequelize.define('image', {
    url: {
      type: DataTypes.STRING(300),
      allowNull: false,
      required: true,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
