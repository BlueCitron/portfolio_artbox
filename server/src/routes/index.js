import { Router } from 'express';

import authRouter from './auth';
import productRouter from './product';
import categoryRouter from './category';
import orderRouter from './order';
import userRouter from './user';

const router = Router();

router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/user', userRouter);

router.get('/', (req, res) => {
  res.json('Hello World')
});

router.use((req, res, next) => {
  return res.status(404).json({
    success: false,
    message: 'Not Found.',
  })
})

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error.',
  })
})

export default router;
