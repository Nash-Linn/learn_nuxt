const {
  register,
  findUserByUserName,
  findUserInfo,
} = require("../model/users");
const { cryptoPwd } = require("../utils");
const { secret } = require("../config");
const Joi = require("joi");

module.exports.register = async (ctx) => {
  const { username, password, mobile } = ctx.request.body;
  // 校验用户名  密码 手机号
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,20}$/),
    repeat_password: Joi.ref("password"),
    //手机号正则
    mobile: Joi.string().pattern(
      /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    ),
  });

  // 校验结果对象
  const result = schema.validate({ username, password, mobile });
  if (result.error) {
    ctx.body = {
      status: false,
      msg: result.error.details[0].message,
    };
    return;
  }

  //查询当前用户是否已注册
  const user = await findUserByUserName(username);

  //已注册
  if (user[0]) {
    ctx.body = {
      status: 0,
      msg: "用户名已存在",
    };
    return;
  }

  await register(username, cryptoPwd(password + secret), mobile);
  ctx.body = {
    status: 200,
    msg: "注册成功",
  };
};

// 登录
module.exports.login = async (ctx) => {
  const { username, password } = ctx.request.body;

  // 查询用户信息
  const user = await findUserInfo(username, cryptoPwd(password + secret));

  if (user[0]) {
    ctx.body = {
      status: 200,
      msg: "登录成功",
    };
  } else {
    ctx.body = {
      status: 0,
      msg: "登录失败，用户名或密码错误",
    };
  }
};
