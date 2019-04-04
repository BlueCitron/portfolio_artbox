import { Router } from 'express';
import { Op } from 'sequelize';

import { Product, Category, Division, Detail, Thumbnail, Image, Delivery, Preview, Information, sequelize } from '../models';

const productRouter = Router();

// Product Caching
const productCache = [];

// Division Caching
let allDivisions = [];
Division.findAll().then(result => { allDivisions = result; });

// 페이징 정보
const PER_PAGE = 12;

productRouter.get('/', async (req, res, next) => {
  try {
    const { category, division, page } = req.query;

    if (!category) {
      return res.json({
          success: false,
          message: 'category를 꼭 입력해주세요.'
      });
    }

    const divisions = allDivisions
                        .filter(division => division.categoryId == category)
                        .map(division => division.id);

    // 전체 카운트
    const totalItems = await Product.count({ where: { divisionId: division ? division : divisions } });
    const totalPages = Math.floor(totalItems % PER_PAGE == 0 ? totalItems / PER_PAGE : totalItems / PER_PAGE + 1);

    // 1차적으로 캐시 검색
    const cached = productCache.find(item => item.category == category && item.division == (division || '') && item.page == (page || 1));
    if (cached) {
      return res.json({
        success: true,
        products: cached.data,
        pageInfo: {
          totalItems,
          totalPages,
          page: page || 1,
          perPage: PER_PAGE,
        },
      })
    }

    // 2차적으로 DB 검색
    const products = await Product.findAll({
      where: { divisionId: division ? division : divisions },
      order: [ ['productCode', 'DESC'] ],
      offset: PER_PAGE * ((page || 1) - 1),
      limit: PER_PAGE,
      include: [{
        model: Thumbnail,
        attributes: [ 'url' ],
      },{
        model: Division,
        attributes: [ 'name' ],
      },{
        model: Preview,
        attributes: [ 'url' ],
      }]
    })

    productCache.push({
      category,
      division: division || '',
      page: page || 1,
      data: products,
    });

    return res.json({
      success: true,
      products,
      pageInfo: {
        totalItems,
        totalPages,
        page: page || 1,
        perPage: PER_PAGE,
      },
    });
  } catch (error) {
    console.log('Error from GET/product', error);
    next(error);
  }
})

productRouter.get('/:id([0-9]+)', async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findOne({
    where: { id },
    include: [{
      model: Thumbnail,
      attributes: [ 'url' ],
    },{
      model: Division,
      attributes: [ 'name' ],
      include: [{
        model: Category,
        attributes: [ 'name']
      }]
    },{
      model: Detail,
      attributes: [ 'type', 'content' ],
    },{
      model: Image,
      attributes: [ 'url' ],
    },{
      model: Preview,
      attributes: [ 'url' ],
    },{
      model: Information,
      attributes: [ 'content' ],
    },]
  });
  return res.json({
    success: true,
    product,
  });
});

productRouter.get('/event/:type/:id', async (req, res, next) => {
  const { type, id } = req.params;

  if (!(type == 'MAIN' || type == 'PROMOTION' || type == 'NEW_ARRIVAL')) {
    return res.json({
      success: false,
      message: 'type을 올바르게 입력해주세요.',
    });
  }

  try {
    const evnetProductIds = process.env[`EVENT_${type}_${id}`].split(',');
    const eventProducts = await Product.findAll({ where: { id: evnetProductIds }, include: [{ model: Thumbnail, attributes: [ 'url' ] }] });
    return res.json({
      success: true,
      products: eventProducts,
    })
  } catch (error) {
    next(error);
  }
})

productRouter.get('/best', async (req, res, next) => {
  let { countBy } = req.query;
  countBy = countBy || 10;

  const [ result, meta ]  = await sequelize.query(`select productId, sum(quantity) as 'sum' from ordered_products group by productId order by sum desc limit ${countBy}`);
  const productIds        = result.map(row => row.productId);
  const unsortedProducts  = await Product.findAll({ where: { id: productIds }, include: [{ model: Thumbnail, attributes: [ 'url' ] }] });

  // 판매량 순위대로 정렬
  const products = [];
  for (const id of productIds) {
     const findItem = unsortedProducts.find(product => product.id == id)
     products.push(findItem);
  }

  return res.json({
    success: true,
    products,
  })
})

productRouter.get('/search', async (req, res, next) => {
  const { name, page } = req.query;

  try {
    const totalItems = await Product.count({ where: { name: { [Op.like]: `%${name}%` } } });
    const totalPages = Math.floor(totalItems % PER_PAGE == 0 ? totalItems / PER_PAGE : totalItems / PER_PAGE + 1);

    const products = await Product.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      order: [ ['productCode', 'DESC'] ],
      offset: PER_PAGE * ((page || 1) - 1),
      limit: PER_PAGE,
      include: [{
        model: Thumbnail,
        attributes: [ 'url' ],
      },{
        model: Division,
        attributes: [ 'name' ],
      }]
    });
    return res.json({
      success: true,
      products,
      pageInfo: {
        totalItems,
        totalPages,
        page: page || 1,
        perPage: PER_PAGE,
      },
    })
  } catch (error) {
    next(error);
  }
});


export default productRouter;
