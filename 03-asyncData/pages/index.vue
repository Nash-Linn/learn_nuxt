<template>
  <div class="home">
    <!-- <h1>asyncData 运行在 {{ server }}</h1> -->
    <!-- <h1>{{ name }}</h1> -->
    <!-- <h1>{{ msg }}</h1> -->
    <ul>
      <li v-for="(item, index) in topics" :key="item.id">{{ item.title }}</li>
    </ul>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "nuxt",
    };
  },
  //方式一
  // async asyncData() {
  //   const {
  //     data: { data: topics },
  //   } = await axios.get("https://cnodejs.org/api/v1/topics");
  //   //通过process.server判断是否是服务端 true:服务端 false:客户端
  //   const server = process.server ? "服务端" : "客户端";
  //   return {
  //     msg: "Hello World!",
  //     server,
  //     topics,
  //   };
  // },

  //方式二 返回promise
  asyncData() {
    return axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
      return {
        topics: res.data.data,
      };
    });
  },
};
</script>
