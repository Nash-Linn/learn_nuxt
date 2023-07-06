const Koa = require("koa"); //koa包
const app = new Koa(); //创建koa实例
const views = require("koa-views"); //处理静态资源
const json = require("koa-json"); //json格式化
const onerror = require("koa-onerror"); //处理异常
const bodyparser = require("koa-bodyparser"); //解析post请求
const logger = require("koa-logger"); //记录日志

//加载路由
const index = require("./routes/index");
const users = require("./routes/users");
const category = require("./routes/category");
const sms = require("./routes/sms");

// error handler  错误处理
onerror(app);

// middlewares 中间件
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// logger  日志
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes 注册路由
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(category.routes(), category.allowedMethods());
app.use(sms.routes(), sms.allowedMethods());

// error-handling 错误处理 一旦监听到异常，打印异常信息
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
