import { Router } from 'express';
import moment from 'moment';
import { Op } from 'sequelize';

import { User, Order, OrderedProduct, Product, Thumbnail } from '../models';

const orderRouter = Router();

const cashPaymentDelay = [];
const keyOfDeal = [
  'customerName', 'customerEmail', 'customerPhoneNumber',
  'shippingName', 'shippingPhoneNumber', 'shippingPostCode', 'shippingAddress',
  'paymentType',
  'paymentCardName', 'paymentCardNumber', 'paymentCVC', 'paymentMonth', 'paymentYear',
  'paymentDepositName', 'paymentBank',
  'discountCandy',
  'orderedProducts',
  'user',
];

orderRouter.get('/', async (req, res, next) => {
  const { userId } = req.query;
  const orders = await Order.findAll({
    where: { userId },
    order: [ ['createdAt', 'DESC'] ],
    include: [{
      model: Product,
      include: [{
        model: Thumbnail,
        attributes: [ 'url' ],
      }]
    }]
  });

  res.json({
    success: true,
    message: '후후후',
    orders,
  });
});

orderRouter.post('/', async (req, res, next) => {
  // 카드결제 = 즉시완료
  // 무통장입금 = 5분후 완료

  // 주문 생성
  // 주문상품 생성

  // 모든 항목 미입력시 Fail
  const keyOfBody = Object.keys(req.body)

  if (keyOfBody.find(key => !keyOfDeal.find(item => item == key))) {
    return res.json({
      success: false,
      message: '올바른 요청이 아닙니다.'
    });
  }

  const {
    customerName, customerEmail, customerPhoneNumber,
    shippingName, shippingPhoneNumber, shippingPostCode, shippingAddress,
    paymentType,
    paymentCardName, paymentCardNumber, paymentCVC, paymentMonth, paymentYear,
    paymentDepositName, paymentBank,
    discountCandy,
    orderedProducts,
    user,
  } = req.body;


  const oneDayCount = await Order.count({ where: { createdAt: { [Op.gte]: moment().startOf('day').toDate() } } });
  const today = new Date();
  const orderNo =  `${moment().format('YYYYMMDDHHmm')}${pad(oneDayCount + 1, 4)}`;
  let totalPaymentFee = orderedProducts.reduce((prev, next) => prev += next.product.price * next.quantity, 0);
      totalPaymentFee < 30000 ? (totalPaymentFee += 2500) : '';   // 배송비 적용
      discountCandy > 0 ? (totalPaymentFee -= discountCandy * 10) : '';   // 캔디 할인 적용
  const totalCandy = orderedProducts.reduce((prev, next) => prev += next.product.candy * next.quantity, 0);
  console.log('totalCandy : ', totalCandy);
  let newOrder = null;
  if (paymentType == 'card') {
    // 카드결제
    newOrder = await Order.create({
      orderNo,
      customerName, customerEmail, customerPhoneNumber,
      shippingName, shippingPhoneNumber, shippingPostCode, shippingAddress,
      paymentType,
      paymentCardName, paymentCardNumber, paymentCVC, paymentMonth, paymentYear,
      paymentDate: new Date(),
      totalPaymentFee,
      status: 'PAID',
      userId: user.id,
    });
    addCandyToUser(user.id, totalCandy - discountCandy);
    setOrderStatus(newOrder, 'SHIPPING', 10);
    setOrderStatus(newOrder, 'DELIVERY_COMPLETE', 20);
    await Promise.all(orderedProducts.map(({ product, quantity }) => newOrder.addProduct(product.id, { through: { quantity } })));

    return res.json({
      success: true,
      message: '주문이 완료되었습니다.',
      status: newOrder.status,
      order: newOrder,
      products: orderedProducts,
    });
  } else if (paymentType == 'cash'){
    // 무통장입금
    newOrder = await Order.create({
      orderNo,
      customerName, customerEmail, customerPhoneNumber,
      shippingName, shippingPhoneNumber, shippingPostCode, shippingAddress,
      paymentType,
      paymentDepositName, paymentBank,
      paymentDate: new Date(),
      totalPaymentFee,
      status: 'WAIT_PAYMENT',
      userId: user.id,
    });
    addCandyToUser(user.id, totalCandy - discountCandy);
    setOrderStatus(newOrder, 'PAID', 10);
    setOrderStatus(newOrder, 'SHIPPING', 20);
    setOrderStatus(newOrder, 'DELIVERY_COMPLETE', 30);
    await Promise.all(orderedProducts.map(({ product, quantity }) => newOrder.addProduct(product.id, { through: { quantity } })));

    return res.json({
      success: true,
      message: '주문이 완료되었습니다.',
      order: newOrder,
      products: orderedProducts,
    });
  } else {
    return res.json({
      success: false,
      message: '올바른 요청이 아닙니다.'
    });
  }
});

function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function setOrderStatus (order, status, second) {
  setTimeout(() => {
    order.update({ status });
  }, 1000 * second);
}

async function addCandyToUser (userId, candy) {
  const user = await User.findOne({ where: { id: userId } });
  const existCandy = user.candy;
  await user.update({ candy: existCandy + candy });
}

export default orderRouter;
