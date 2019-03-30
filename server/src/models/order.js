module.exports = (sequelize, DataTypes) => {
  return sequelize.define('order', {
    orderNo: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      primaryKey: true,
      validate: {
        min: 12,
        max: 12,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    message: {
      type: DataTypes.TEXT,
    },
    paymentType: {
      // 무통장입금 카드
      type: DataTypes.ENUM('WAIT_PAYMENT', 'DEPOSITLESS_PAYMENT', 'CARD'),
      allowNull: false,
      required: true,
    },
    paymentInfo: {
      type: DataTypes.STRING,
      required: true,
    },
    status: {
      // 대기 결제완료 발송중 발송완료
      type: DataTypes.ENUM('WAIT_PAYMENT', 'PAID', 'SHIPPING', 'SHIP_COMPLETE'),
      allowNull: false,
      required: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
  });
}
