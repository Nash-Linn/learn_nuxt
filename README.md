

# learn_nuxt

## 1.Nust 脚手架项目

### 1.安装

```
yarn create nuxt-app 项目名
```

### 2.启动

```
yarn install
yarn dev
```

### 3.客户端和服务端渲染区别

1.客户端渲染的网站，是要经过JS动态生成HTML和内容。但是爬虫在爬取网站时，JS无法执行,导致爬虫无法收录网页的内容，不利于SEO优化

2.服务端渲染：网页上的内容在服务端已经渲染好了，浏览器是直接拿到服务器渲染好的页面，直接呈现给用户，有利于爬虫爬取网页内容，有利于SEO优化



### 4.nuxt脚手架项目

1.components目录下的组件，在pages目录中的页面组件中直接使用



nuxt.config.js

```
  components: true, //自动在页面导入组件
```



### 5.页面组成

1. 布局文件： layouts/default.vue  默认布局文件就是 default.vue
2. 布局文件中，使用  <Nuxt /> 占位  可以看成 vue-router
3. 页面组件：可以直接使用复用组件



### 6.布局文件

1.默认是default.vue。它是项目中所有页面的根组件

2.自定义布局文件，在layouts目录下，创建一个 xxx.vue布局文件

3.在页面中使用时，通过layout:'xxx'  自定义布局文件名称

```
export default {
  layout: "xxx", //可以指定要使用的布局文件
};
```

4.布局文件：网站通用布局结构



### 7.error组件

1. 定义在layouts/error.vue , 作用：路由找不到时，显示一个错误页面，提升用户体验
2. 要把 error组件看成页面组件，继承自 defalut.vue 布局，当然也可以使用自定义布局



### 8.路由

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

   

	#### 8.1路径和文件的关系

不需要自己写配置文件，直接和文件名对应

| 文件                 | 对应路径             |
| -------------------- | -------------------- |
| pages/index.vue      | /                    |
| pages/login.vue      | /login               |
| pages/user/order.vue | /user/oder           |
| pages/good/index.vue | /good(省略index.vue) |

#### 8.2  路由参数

很多时候我们需要在路由上传参数，路由上的参数有两种

- 路径参数：  /goods/100
- 查询参数：  /goods?id=100

##### 8.2.1 路径参数

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



##### 8.2.1 查询参数

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



### 9.asyncData

 Nuxt.js 扩展了Vue.js ，增加了一个叫 asyncData 的方法，使得我们可以在设置组件数据之前异步获取或处理数据。

#### 1.asyncData函数什么时候用？

- 只能用在页面文件中（page目录下的文件中）
- 在获取页面初始化异步数据时使用

#### 2.为什么使用它？

在这里获取的数据会显示在页面源代码中，有利于SEO

#### 3.有哪些特点

- 需要return 一个数据，然后这个数据可以在页面中使用
- 有很多参数：比如query.params, route 等
- 它可以在服务端或路由更新之前被调用
  - asyncData 函数默认在服务端渲染
  - asyncData 函数在当前所在页面更新后在服务端渲染
  - asyncData 函数在路由跳转时在客户端渲染
- 可用使用nuxt 提供的 api ，process.server 判断是否是服务端  true:服务端 false:客户端
- asyncData 只能使用在页面组件

​		

#### 4.使用方式

#### 4.1 return数据

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

