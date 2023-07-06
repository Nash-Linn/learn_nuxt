const crypto = require("crypto");

/**
 *  对用户注册成功后的密码进行MD5加密生成密文后返回
 *  @param {string} pwd 用户注册的密码 拼接 一个随机字符串 后的字符串
 *  @return {string} 返回加密后的密文
 */
module.exports.cryptoPwd = (pwd) => {
  return crypto.createHash("MD5").update(pwd).digest("hex");
};
