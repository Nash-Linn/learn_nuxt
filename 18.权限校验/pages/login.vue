<template>
  <div>
    <p>用户名：<input type="text" /></p>
    <p>密码：<input type="text" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    login() {
      setTimeout(() => {
        const auth = "asdasdfdasdfsdagasdfsdfasd";
        this.$store.commit("updateAuth", auth);
        //存储Cookie
        Cookie.set("auth", auth);
        //跳转首页
        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>
