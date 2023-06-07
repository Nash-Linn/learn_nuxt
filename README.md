

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

   

​	
