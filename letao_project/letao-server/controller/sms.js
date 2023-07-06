const { sendsms, smscode } = require("../utils");

module.exports.sendsms = async (ctx) => {
  const { mobile } = ctx.request.body;

  const result = await sendsms(mobile, smscode(6));

  // 返回数据
  if (result.SendStatusSet[0].Code == "Ok") {
    ctx.body = {
      status: 200,
      data: result,
    };
  } else {
    ctx.body = {
      status: 0,
      msg: "发送失败",
    };
  }
};
