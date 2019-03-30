module.exports = (sequelize, DataTypes) => {
  return sequelize.define('category', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      required: true,
      unique: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
}
