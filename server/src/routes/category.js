import { Router } from 'express';

import { Category, Division } from '../models';

const categoryRouter = Router();

categoryRouter.get('/', async (req, res, next) => {
  
  try {
    const categories = await Category.findAll();
    const divisions = await Division.findAll();

    return res.json({
      success: true,
      categories,
      divisions,
    });
  } catch (error) {
    console.log('Error from GET/category', error);
    next(error);
  }

})


export default categoryRouter;
