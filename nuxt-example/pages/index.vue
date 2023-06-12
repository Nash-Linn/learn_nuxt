<template>
  <div class="home">
    <h1>asyncData 运行在 {{ server }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ msg }}</h1>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "nuxt",
    };
  },
  //会把返回的数据合并到data中
  asyncData() {
    console.log("asyncData");

    //通过process.server判断是否是服务端 true:服务端 false:客户端
    const server = process.server ? "服务端" : "客户端";
    return {
      msg: "Hello World!",
      server,
    };
  },
};
</script>
