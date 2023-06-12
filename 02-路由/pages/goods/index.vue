<template>
  <div>
    <h1>接收查询参数</h1>
    <span>第一个参数：{{ $route.query.cid }}</span>
    <span>第二个参数：{{ $route.query.gid }}</span>
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
