module.exports = (sequelize, DataTypes) => {
  return sequelize.define('thumbnail', {
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
