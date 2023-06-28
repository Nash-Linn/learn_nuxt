<template>
  <div>首页</div>
</template>

<script>
export default {
  data() {
    return {
      title: "首页",
    };
  },
  // 在页面中配置TDK，注意hid属性，覆盖全局配置
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
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
