import { Router } from 'express';

import { User, Product, Thumbnail } from '../models';

const wishRouter = Router();

wishRouter.get('/', async (req, res, next) => {
  try {
    const { userId } = req.query;
    const wishlist = (await User.findOne({
      where: { id: userId },
      include: [{
        model: Product,
        include: [{ model: Thumbnail, attributes: [ 'url' ] }],
      }]
    })).products;
    return res.json({
      success: true,
      wishlist,
    });
  } catch (error) {
    next(error);
  }
})

wishRouter.post('/', async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    const user = await User.findOne({ where: { id: userId }});
    await user.addProduct(productId);
    return res.json({
      success: true,
      message: `${userId} 유저의 위시리스트에 상품아이디: ${productId} 삭제`
    });
  } catch (error) {
    next(error);
  }
})

wishRouter.delete('/', async (req, res, next) => {
  try {
    const { userId, productId } = req.query;
    const user = await User.findOne({ where: { id: userId }});
    const product = await Product.findOne({ where: { id: productId }});
    user.removeProduct(product);

    return res.json({
      success: true,
      message: `${userId} 유저의 위시리스트에 상품아이디: ${productId} 추가`
    });
  } catch (error) {
    next(error);
  }
})

export default wishRouter;
