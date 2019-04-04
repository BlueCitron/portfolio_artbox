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
    },
    candy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    postCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
