const { query } = require('../db/query');
// 一级分类数据层
module.exports.oneCategory = async ()=>{
   return await query('select * from category');
}

// 一级分类数据层
module.exports.twoCategory = async (id)=>{
   return await query('select * from brand where categoryId = ?', [id]);
}