<template>
  <div>
    <h1>我的页面</h1>
    <nuxt-link to="/">go home</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>
<style lang="css" scoped></style>
