const { oneCategory } = require("../model/category");

// 一级分类的业务逻辑处理
module.exports.oneCategory = async (ctx) => {
  // const result =  await query('select * from category');
  const result = await oneCategory();
  // 返回数据
  ctx.body = {
    status: 200,
    data: result,
  };
};
