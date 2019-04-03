import { Router } from 'express';

import { Product, Category, Division, Detail, Thumbnail, Image, Delivery, Preview, Information } from '../models';

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
      },]
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

productRouter.get('/:id', async (req, res, next) => {
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

productRouter.get('/event/:id', async (req, res, next) => {
  const { id } = req.params;
  const evnetProductIds = process.env[`EVENT_LIST_${id}`].split(',')
  try {
    const eventProducts = await Product.findAll({ where: { id: evnetProductIds }, include: [{ model: Thumbnail, attributes: [ 'url' ] }] });
    return res.json({
      success: true,
      products: eventProducts,
    })
  } catch (error) {
    next(error);
  }
})





export default productRouter;
