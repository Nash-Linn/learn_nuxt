<template>
  <div>首页</div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {
    // 保证dom元素加载完毕
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 3000);
    });
  },
};
</script>
