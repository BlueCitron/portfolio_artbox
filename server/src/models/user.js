module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      required: true,
    },
    type: {
      type: DataTypes.ENUM('default', 'kakao', 'facebook', 'naver'),
      allowNull: false,
      required: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
}
