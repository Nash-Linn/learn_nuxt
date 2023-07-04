<template>
  <div>
    <div v-if="!$store.state.auth">
      please
      <nuxt-link to="/login">login</nuxt-link>
    </div>
    <div v-else>
      您已登录，可以访问我的页面
      <nuxt-link to="/my">my</nuxt-link>
      <p>
        <button @click="logout">退出登录</button>
      </p>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("updateAuth", "");
        Cookie.remove("auth");
        this.$forceUpdate();
      }, 1000);
    },
  },
};
</script>
