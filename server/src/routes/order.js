import { Router } from 'express';

const orderRouter = Router();

orderRouter.post('/', async (req, res, next) => {

  const {
    customerName, customerEmail, customerPhoneNumber,
    shippingName, shippingPhoneNumber, shippingPostCode, shippingAddress,
    paymentType,
    paymentCardName, paymentCardNumber, paymentCVC, paymentMonth, paymentYear,
    paymentDepositName, paymentBank,
    discountCandy,
  } = req.body

  console.log({
    customerName, customerEmail, customerPhoneNumber,
    shippingName, shippingPhoneNumber, shippingPostCode, shippingAddress,
    paymentType,
    paymentCardName, paymentCardNumber, paymentCVC, paymentMonth, paymentYear,
    paymentDepositName, paymentBank,
    discountCandy,
  })

  res.json('Success.')

});

export default orderRouter;
