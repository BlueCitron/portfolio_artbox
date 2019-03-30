module.exports = (sequelize, DataTypes) => {
  return sequelize.define('product', {
    productCode: {
      type: DataTypes.STRING(12),
      allowNull: false,
      required: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      required: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    shippingFee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true,
    },
    candy: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.STRING(200)),
    // },
    // details: {
    //   type: DataTypes.ARRAY(DataTypes.STRING(200)),
    // },
    // delivery: {
    //   type: DataTypes.ARRAY(DataTypes.STRING(300)),
    // },
  }, {
    timestamps: true,
    paranoid: true,
  });
}
