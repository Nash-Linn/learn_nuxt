<template>
  <div>
    <div>
      please
      <nuxt-link to="/">login</nuxt-link>
    </div>
    <div>
      您已登录，可以访问我的页面
      <nuxt-link to="/my">my</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
