const router = require("koa-router")();
const { oneCategory } = require("../controller/category");

// 一级分类接口
router.get("/oneCategory", oneCategory);

module.exports = router;
