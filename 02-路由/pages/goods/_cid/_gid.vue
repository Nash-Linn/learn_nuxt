<template>
  <div>
    <h1>接收路径参数</h1>
    <h2>多个参数需要创建对应多个的路径</h2>
    <h2>创建文件夹 _cid ,然后再创建文件 _gid.vue</h2>
    <span>第一个参数： {{ $route.params.cid }} </span>
    <span>第二个参数： {{ $route.params.gid }}</span>
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
