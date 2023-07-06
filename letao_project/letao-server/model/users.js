const { query } = require("../db/query.js");

//用户注册、

module.exports.register = async (username, password, mobile) => {
  return await query(
    `insert into user ( username, password, mobile ) values ("${username}", "${password}" , "${mobile}" )`
  );
};

// 根据用户名查询
module.exports.findUserByUserName = async (username) => {
  return await query({
    sql: "select * from `user` where `username` = ?",
    values: [username],
  });
};

// 用户登录
module.exports.findUserInfo = async (username, password) => {
  return await query({
    sql: "select * from `user` where `username` = ? and `password` = ?",
    values: [username, password],
  });
};
