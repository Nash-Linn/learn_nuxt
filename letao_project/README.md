# 乐淘项目

## 0.技术栈

​	后端开发语言：Koa  Koa脚手架搭建项目 ,微信支付，短信验证，JWT，加密

​	数据库:mysql

​	服务器：腾讯云：window server 2012



## 1.项目介绍

### 1.目标

​	后端开发流程：

​	1.后端开发流程，先看设计稿，有多少页面，每个页面需要哪些接口，以及接口功能

​	2.提前思考，先要设计数据库中需要拿到多少个表，表里面需要用到哪些字段，设计数据库中的表

​	3.使用KOA完成接口的开发，自己开发的接口，我们可以使用postman进行接口测试

​	

​	目标：首页用到的接口

### 2.实现

1.乐淘项目有首页，分类页，购物车，会员中心页面

2.首页需要用到的接口：

​	1. banners 接口，提供首页轮播图数据的

​	2. gridList 宫格接口，提供宫格数据

​	3. sportList 运动专区 提供运动专区的数据

​	4.brandList 品牌专区，提供品牌专区的数据

3.分类页用到的接口

​	1.一级分类 oneCategoryList 提供一级分类列表 数据库中需要新建分类表

​	2.二级分类 twoCategoryList  根据id获取二级分类数据





​	

### 3.总结

后端开发，先看设计稿，设计数据库，开发接口，postman测试是否可用，发布测试环境给前端联调

注意：后端开发中，会提前告诉前端开发人数据，接口地址，以及每个接口返回的数据结构，字段，注释，

前端拿到接口地址，接口返回的结构，使用mock等模拟数据，同时进行开发





## 2.项目初始化

### 1.目标

​	koa脚手架安装和使用

### 2.实现

​	1.安装脚手架

```
npm install -g koa-generator
```

​	2.使用koa生成项目

​		1.koa2 项目名称

​	

## 3.koa脚手架项目结构

koa生成器会生成满足koa开发一系列的相关默认配置和文件，我们对初始化的文件目录以及文件掌握



bin				  用于启动服务

public			 公共文件

routes			路由

views			  页面

app.js			  入口文件，初始化koa，加载路由

package.json  记录项目启动方式及包的版本



## 4.核心文件代码

1.app.js 

```js
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

// error-handling 错误处理 一旦监听到异常，打印异常信息
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

```



2.bin/www 服务启动文件

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require("../app");
var debug = require("debug")("demo:server");
var http = require("http");

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "3000"); // 服务端口
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback()); // 创建服务

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); // 监听端口
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

```





## 5.主从复制，读写分离

![image-20230705153441903](C:/Users/90949/AppData/Roaming/Typora/typora-user-images/image-20230705153441903.png)







# 接口

## 1.首页接口

### 1.1宫格接口开发

1.在路由中 index.js 中新增一个接口名未 gridList 接口

2.在接口 gridList 返回宫格数据

```
//首页宫格数据
router.get("/gridList", async (ctx, next) => {
  ctx.body = {
    status: 200,
    gridList: [
      {
        id: 1,
        img_src: "/images/nav1.png",
      },
      {
        id: 2,
        img_src: "/images/nav2.png",
      },
      {
        id: 3,
        img_src: "/images/nav3.png",
      },
      {
        id: 4,
        img_src: "/images/nav4.png",
      },
    ],
  };
});
```

在routes/index.js  使用router.get('/api的名称',回调),注意：让新增api生效，必须要在app.js 导入



### 1.2MVC设计模式

mvc是一种后端开发常用的设计模式

1. M: model		提供数据
2.  V: view           视图层  使用model提供的数据，呈现页面
3.  C: controller       控制层  禁止model层，进行逻辑业务的编写

优势：低耦合，view层，model层，controller层相互分离，方便维护，降低耦合度



MVVM：是前端非常流行的设计思想，它只是MVC的 view层

M：提供数据

V：模板

VM：模板和数据的桥梁, vue实例化时产生vm

比如

```
const vm = new Vue({
	data:{
		
	},
	methods:{
	
	}
	...
})
```

### 1.3按照MVC架构思想编写服务端代码

使用mvc结构，完成对首页宫格的接口改造



1.需要把 routes/index.js 中gridList 接口拆分

2.用户请求接口时，首先会先进入controller层，在控制model，返回数据给前端调用

3.在controller/index.js 导出一个gridList 控制宫格数据业务逻辑

4.在routes/index.js  导入





在controller/index.js

```
//宫格数据的业务控制
module.exports.gridList = async (ctx, next) => {
  ctx.body = {
    status: 200,
    gridList: [
      {
        id: 1,
        img_src: "/images/nav1.png",
      },
      {
        id: 2,
        img_src: "/images/nav2.png",
      },
      {
        id: 3,
        img_src: "/images/nav3.png",
      },
      {
        id: 4,
        img_src: "/images/nav4.png",
      },
    ],
  };
};
```

routes/index.js

```js
const router = require("koa-router")();
const { gridList } = require("../controller/index");

//首页宫格数据
router.get("/gridList", gridList);

module.exports = router;
```



### 1.4 轮播图、运动专区

1.在routes/index.js 新增两个接口

2.controller/index.js 分别导出

routes/index.js

```
const router = require("koa-router")();
const { gridList, banners, sports } = require("../controller/index");

//首页宫格数据
router.get("/gridList", gridList);

// 轮播图
router.get("/banners", banners);
//运动专区接口
router.get("/sports", sports);

module.exports = router;

```

controller/index.js

```
//宫格数据的业务控制
module.exports.gridList = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: [
      {
        id: 1,
        img_src: "/images/nav1.png",
      },
      {
        id: 2,
        img_src: "/images/nav2.png",
      },
      {
        id: 3,
        img_src: "/images/nav3.png",
      },
      {
        id: 4,
        img_src: "/images/nav4.png",
      },
    ],
  };
};

//首页轮播图
module.exports.banners = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: [],
  };
};

//运动专区
module.exports.sports = async (ctx, next) => {
  ctx.body = {
    status: 200,
    data: [
      {
        name: "Nike Air Max 270",
        img: "/images/sport1.png",
        price: 999,
        oldPrice: 1299,
      },
    ],
  };
};
```



创建数据库

```mysql
SHOW DATABASES;

SELECT DATABASE();

use letao;

# --创建分类表
CREATE TABLE `category` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `categoryName` varchar(50) DEFAULT null,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = utf8;
```

