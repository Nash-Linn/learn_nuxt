const router = require('koa-router')();
const { gridlist,banners,sports  } = require('../controller/index');

// 首页宫格数据
router.get('/gridlist', gridlist);

// 轮播图接口
router.get('/banners', banners);

// 运动专区接口
router.get('/sports', sports);

module.exports = router
