'use strict';

import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const options = {
  dialect: 'mysql',
  timezone: 'Asia/Seoul',
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: true
  },
  //logging: false,
}
const sequelize = new Sequelize(config.database, config.username, config.password, options);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Category       = require('./category')(sequelize, Sequelize);
db.Division       = require('./division')(sequelize, Sequelize);
db.Product        = require('./product')(sequelize, Sequelize);
db.Image          = require('./image')(sequelize, Sequelize);
db.Delivery       = require('./delivery')(sequelize, Sequelize);
db.Detail         = require('./detail')(sequelize, Sequelize);
db.Thumbnail      = require('./thumbnail')(sequelize, Sequelize);
db.Order          = require('./order')(sequelize, Sequelize);
db.User           = require('./user')(sequelize, Sequelize);
db.Preview        = require('./preview')(sequelize, Sequelize);
db.Information    = require('./product_information')(sequelize, Sequelize);
db.OrderedProduct = require('./ordered_product')(sequelize, Sequelize);

// 카테고리 - 중분류
db.Category.hasMany(db.Division);
db.Division.belongsTo(db.Category);

// 중분류 - 상품
db.Division.hasMany(db.Product);
db.Product.belongsTo(db.Division);

// 상품 - 썸네일
db.Product.hasMany(db.Thumbnail);
db.Thumbnail.belongsTo(db.Product);

// 상품 - 이미지
db.Product.hasMany(db.Image);
db.Image.belongsTo(db.Product);

// 상품 - 디테일
db.Product.hasMany(db.Detail);
db.Detail.belongsTo(db.Product);

// 상품 - 배송
db.Product.hasMany(db.Delivery);
db.Delivery.belongsTo(db.Product);

// 유저 - 주문
db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);

// 상품 - 미리보기
db.Product.hasMany(db.Preview);
db.Preview.belongsTo(db.Product);

// 상품 - 정보
db.Product.hasMany(db.Information);
db.Information.belongsTo(db.Product);

// 주문 - 주문상품
db.Order.belongsToMany(db.Product, { through: db.OrderedProduct, foreignKey: 'orderNo' });
db.Product.belongsToMany(db.Order, { through: db.OrderedProduct, foreignKey: 'productId' });

// 유저 - 상품 (위시리스트)
db.User.belongsToMany(db.Product, { through: 'wishlist', foreignKey: 'userId' });
db.Product.belongsToMany(db.User, { through: 'wishlist', foreignKey: 'productId' });

module.exports = db;
