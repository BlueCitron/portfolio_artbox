module.exports = (sequelize, DataTypes) => {
  return sequelize.define('detail', {
    type: {
      type: DataTypes.STRING(200),
      allowNull: false,
      required: true,
    },
    content: {
      type: DataTypes.STRING(300),
      allowNull: false,
      required: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
}
