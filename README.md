# 1.Nust 脚手架项目

## 1.1安装

```
yarn create nuxt-app 项目名
```

## 1.2启动

```
yarn install
yarn dev
```

## 1.3客户端和服务端渲染区别

1.客户端渲染的网站，是要经过JS动态生成HTML和内容。但是爬虫在爬取网站时，JS无法执行,导致爬虫无法收录网页的内容，不利于SEO优化

2.服务端渲染：网页上的内容在服务端已经渲染好了，浏览器是直接拿到服务器渲染好的页面，直接呈现给用户，有利于爬虫爬取网页内容，有利于SEO优化



## 1.4nuxt脚手架项目

1.components目录下的组件，在pages目录中的页面组件中直接使用



nuxt.config.js

```
  components: true, //自动在页面导入组件
```



# 2.页面组成

1. 布局文件： layouts/default.vue  默认布局文件就是 default.vue
2. 布局文件中，使用  <Nuxt /> 占位  可以看成 vue-router
3. 页面组件：可以直接使用复用组件



# 3.布局文件

1.默认是default.vue。它是项目中所有页面的根组件

2.自定义布局文件，在layouts目录下，创建一个 xxx.vue布局文件

3.在页面中使用时，通过layout:'xxx'  自定义布局文件名称

```
export default {
  layout: "xxx", //可以指定要使用的布局文件
};
```

4.布局文件：网站通用布局结构



# 4.error组件

1. 定义在layouts/error.vue , 作用：路由找不到时，显示一个错误页面，提升用户体验
2. 要把 error组件看成页面组件，继承自 defalut.vue 布局，当然也可以使用自定义布局



# 5.路由

1.pages/xxx.vue 文件即路由, nuxt内置了vue-router 无需自己配置

```
<template>
  <div class="home">
    <h1>home page</h1>
    <nuxt-link to="/about">go about</nuxt-link>
  </div>
</template>
```

```
<template>
  <div class="home">
    <h1>about page</h1>
    <nuxt-link to="/">go home</nuxt-link>
  </div>
</template>
```

2. 当前路由选中后<nuxt-link>组件会自带激活类目

   nuxt-link-active 模糊匹配

   nuxt-link-exact-active 精确匹配



## 5.1路径和文件的关系

不需要自己写配置文件，直接和文件名对应

| 文件                 | 对应路径             |
| -------------------- | -------------------- |
| pages/index.vue      | /                    |
| pages/login.vue      | /login               |
| pages/user/order.vue | /user/oder           |
| pages/good/index.vue | /good(省略index.vue) |

## 5.2  路由参数

很多时候我们需要在路由上传参数，路由上的参数有两种

- 路径参数：  /goods/100
- 查询参数：  /goods?id=100

### 5.2.1 路径参数

为了能够配置路径参数，我们需要以 _ 作为文件名的前缀

接收 /goods/100

```
<template>
  <div>
    <h1>接收路径参数</h1>
    <h2>文件名定义叫什么名字，变量名就是什么名字</h2>
    <h2>文件是从上往下找的</h2>
    {{ $route.params.i }}
  </div>
</template>
```

![image-20230612145236527](README.assets/image-20230612145236527.png)



接收 /goods/100/200

```
<template>
  <div>
    <h1>接收路径参数</h1>
    <h2>多个参数需要创建对应多个的路径</h2>
    <h2>创建文件夹 _cid ,然后再创建文件 _gid.vue</h2>
    <span>第一个参数： {{ $route.params.cid }} </span>
    <span>第二个参数： {{ $route.params.gid }}</span>
  </div>
</template>
```

![image-20230612145307577](README.assets/image-20230612145307577.png)



| 路径           | 对应文件                     | 页面中接受                            |
| -------------- | ---------------------------- | ------------------------------------- |
| /goods/100     | pages/goods/_id.vue          | $route.params.id                      |
| /goods/100/200 | pages/goods/ _cid / _gid.vue | $route.params.cig   $route.params.gid |



### 5.2.2 查询参数

```
  <h4>查询参数传递</h4>
    <ul>
      <li><nuxt-link to="/goods?cid=100">goods?id=100</nuxt-link></li>
      <li>
        <nuxt-link to="/goods?cid=100&gid=200">goods?cid=100&gid=200</nuxt-link>
      </li>
    </ul>
```

```
<template>
  <div>
    <h1>接收查询参数</h1>
    <span>第一个参数：{{ $route.query.cid }}</span>
    <span>第二个参数：{{ $route.query.gid }}</span>
  </div>
</template>

```



| 路径                   | 对应文件        | 页面中接受                          |
| ---------------------- | --------------- | ----------------------------------- |
| /goods?cid=100         | pages/goods.vue | $route.query.cid                    |
| /goods?cid=100&gid=200 | pages/goods.vue | $route.query.cid   $route.query.gid |



##### 总结

​	使用区别：

- ​	查询参数？ 不利于SEO，百度在抓取我们页面时，如果用？只会抓取一个页面

​			content?id=1

​			content?id=2

​			content?id=3

- ​	推荐使用路径参数



# 6.asyncData

 Nuxt.js 扩展了Vue.js ，增加了一个叫 asyncData 的方法，使得我们可以在设置组件数据之前异步获取或处理数据。

## 6.1 asyncData函数什么时候用？

- 只能用在页面文件中（page目录下的文件中）
- 在获取页面初始化异步数据时使用

## 6.2 为什么使用它？

在这里获取的数据会显示在页面源代码中，有利于SEO

## 6.3 有哪些特点

- 需要return 一个数据，然后这个数据可以在页面中使用
- 有很多参数：比如query.params, route 等
- 它可以在服务端或路由更新之前被调用
  - asyncData 函数默认在服务端渲染
  - asyncData 函数在当前所在页面更新后在服务端渲染
  - asyncData 函数在路由跳转时在客户端渲染
- 可用使用nuxt 提供的 api ，process.server 判断是否是服务端  true:服务端 false:客户端
- asyncData 只能使用在页面组件 
- asyncData参数1：对象 context 包含 isDev, route, store, env, params, query, req, res,redirect,error,

​		

## 6.4 使用方式

### 6.4.1 return数据

```vue
<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  //会把返回的数据合并到data中
  asyncData() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

```



### 6.4.2 asyncData参数

```vue
<script>
export default {
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    console.log("isDev", isDev);
    console.log("route", route);
    console.log("store", store);
    console.log("env", env);
    console.log("params", params);
    console.log("query", query);
    console.log("req", req);
    console.log("res", res);
    console.log("redirect", redirect);
    console.log("error", error);
  },
};
</script>

```

### 6.4.3 asyncData处理异步数据

方式一 async await

```
<script>
import axios from "axios";
export default {
  async asyncData() {
    const {
      data: { data: topics },
    } = await axios.get("https://cnodejs.org/api/v1/topics");
    return {
      topics,
    };
  },
};
</script>
```

方式二 返回promise

```
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "nuxt",
    };
  },
  asyncData() {
   //方式二 返回promise
    return axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
      return {
        topics: res.data.data,
      };
    });
  },
};
</script>
```



# 7.加载资源

## 7.1 使用assets

```vue
<template>
  <div class="home">
    <div>
      <h1>assets目录下的图片资源</h1>

      <h3>img标签显示图片</h3>
      <img src="~assets/images/1.jpg" />

      <h3>class显示图片</h3>
      <div class="picimg"></div>

      <h3>style显示图片</h3>
      <div :style="backgroundImage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: {
        width: "100px",
        height: "200px",
        background: `url(${require("~/assets/images/1.jpg")})`,
        backgroundSize: "contain",
      },
    };
  },
  asyncData() {
    return {};
  },
};
</script>

<style>
.picimg {
  width: 100px;
  height: 200px;
  background: url("~assets/images/1.jpg") no-repeat;
  background-size: contain;
}
</style>

```

## 7.2 使用static

```vue
<template>
  <div class="home">
    <div>
      <h1>static目录下的图片资源</h1>

      <h3>img标签显示图片</h3>
      <img src="/images/1.jpg" />

      <h3>class显示图片</h3>
      <div class="picimg"></div>

      <h3>style显示图片</h3>
      <div :style="backgroundImage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: {
        width: "100px",
        height: "200px",
        background: `url(${require("~/static/images/1.jpg")})`,
        backgroundSize: "contain",
      },
    };
  },
  asyncData() {
    return {};
  },
};
</script>

<style>
.picimg {
  width: 100px;
  height: 200px;
  background: url("/images/1.jpg") no-repeat;
  background-size: contain;
}
</style>

```

### 总结

**assets目录**

- assets目录，会被webpack打包
- 访问路径：~/assets/路径
- 使用require时，require（~/assets/路径）



**static目录**

- static目录，不会被webpack打包
- 访问路径：/images/路径             （images是static下的文件夹）
- 使用require时，require（~/static/路径）



使用style时， 不管是assets 还是 static 在使用 require 都需要使用 ~/路径



# 8.less

## 8.1 安装

使用yarn/npm 安装 less

```
yarn add less less-loader@7.3.0
```

安装 @nuxtjs/style-resources

```
yarn add @nuxtjs/style-resources
```

## 8.2 创建文件

assets/less/variables.less  写变量

assets/less/base.less  写公共样式

## 8.3 配置 nuxt.config.js

```js
css: ["~/assets/less/base.less"],
buildModules: [
    '@nuxtjs/style-resources' //可以省去导入less操作
],
//配置css预处理全局变量
styleResources: {
    less: ["./assets/less/variables.less"],
},
```

 

# 9.scss

## 9.1 安装

使用yarn/npm 安装 sass

```
yarn add -D sass sass-loader@10 fibers
```

安装 @nuxtjs/style-resources

```
yarn add @nuxtjs/style-resources
```

## 9.2 创建文件

assets/scss/variables.scss写变量

assets/scss/base.scss写公共样式

## 9.3 配置 nuxt.config.js

```js
css: ["~/assets/scss/base.scss"],
buildModules: [
    '@nuxtjs/style-resources' //可以省去导入sass操作
],
//配置css预处理全局变量
styleResources: {
    scss: ["./assets/scss/variables.sassscss
},
```

 

# 10.pug

html 模板，简化标签写法

## 10.1 安装

```
yarn add -D pug pug-plain-loader
```

## 10.2 使用

```vue
<template lang="pug">
  div 
      h1 Hello World
      p this page use pug
      img(src="~/assets/images/1.jpg" )
</template>
```



# 11.多级路由

在 layouts 创建 default.vue

```vue
<template>
  <div>
    <nav>
      <ul>
        <!-- <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/parent">Parent</nuxt-link></li> -->

        <li><a :class="{ active: flag }" @click="go('/')">Home</a></li>
        <li>
          <a :class="{ active: !flag }" @click="go('/parent')">Parent</a>
        </li>
      </ul>
    </nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    go(path) {
      this.flag = !this.flag;
      this.$router.push(path);
    },
  },
};
</script>
<style scoped>
.active {
  color: red !important;
}
</style>

```

pages 下 创建 index.vue

```
<template>
  <div class="home">
    <h1>Hello World</h1>
  </div>
</template>
```

pages 下创建 parent.vue

```
<template>
  <div>
    <h1>parent页面（一级路由）</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/parent/child1">Child1</nuxt-link></li>
        <li><nuxt-link to="/parent/child2">Child2</nuxt-link></li>
      </ul>
      <!-- 占位 当匹配到二级路由 对应的页面显示在下面-->
      <nuxt-child />
    </nav>
  </div>
</template
```

在parent 下创建 child1.vue

```
<template>
  <div>
    <h1>Child1</h1>
    <p>{{ $route.path }}</p>
  </div>
</template>

```

在parent 下创建 child2.vue

```
<template>
  <div>
    <h1>Child2</h1>
    <p>{{ $route.path }}</p>
  </div>
</template>

```

