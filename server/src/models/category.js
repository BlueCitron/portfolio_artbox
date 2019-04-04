module.exports = (sequelize, DataTypes) => {
  return sequelize.define('category', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      required: true,
      unique: true,
    },
    alias: {
      type: DataTypes.STRING(45),
      allowNull: false,
      required: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
}
