module.exports = (sequelize, DataTypes) => {
  return sequelize.define('order', {
    orderNo: {
      type: DataTypes.STRING(16),
      allowNull: false,
      required: true,
      primaryKey: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    customerPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    shippingName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    shippingPhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    shippingPostCode: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    paymentType: {
      // 무통장입금 카드
      type: DataTypes.ENUM('CASH', 'CARD'),
      allowNull: false,
      required: true,
    },
    paymentCardName: {
      type: DataTypes.STRING,
    },
    paymentCardNumber: {
      type: DataTypes.STRING,
    },
    paymentCVC: {
      type: DataTypes.STRING,
    },
    paymentMonth: {
      type: DataTypes.STRING,
    },
    paymentYear: {
      type: DataTypes.STRING,
    },
    paymentDepositName: {
      type: DataTypes.STRING,
    },
    paymentBank: {
      type: DataTypes.STRING,
    },
    paymentDate: {
      type: DataTypes.DATE,
    },
    totalPaymentFee: {
      type: DataTypes.INTEGER,
    },
    status: {
      // 입금대기 결제완료 발송중 발송완료
      type: DataTypes.ENUM('WAIT_PAYMENT', 'PAID', 'SHIPPING', 'DELIVERY_COMPLETE'),
      allowNull: false,
      required: true,
    }
  }, {
    timestamps: true,
    // paranoid: true,
  });
}
