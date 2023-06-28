<template>
  <div>
    <h1 v-tooltip="msg">Home Transition</h1>
    <ul>
      <li v-for="(item, index) in topics" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
    };
  },
  async asyncData({ app }) {
    const {
      data: { data: topics },
    } = app.$api.getTopics("/topics");

    return {
      topics,
    };
  },
};
</script>

<style lang="scss" scope></style>
