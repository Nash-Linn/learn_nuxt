<template>
  <div>
    <h1>接收路径参数</h1>
    <h2>文件名定义叫什么名字，变量名就是什么名字</h2>
    <h2>文件是从上往下找的</h2>
    {{ $route.params.i }}
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang="css" scoped></style>
