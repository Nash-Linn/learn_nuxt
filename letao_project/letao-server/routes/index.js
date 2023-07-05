const router = require("koa-router")();
const { gridList, banners, sports } = require("../controller/index");

//首页宫格数据
router.get("/gridList", gridList);

// 轮播图
router.get("/banners", banners);
//运动专区接口
router.get("/sports", sports);

module.exports = router;
