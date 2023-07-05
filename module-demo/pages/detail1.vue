<template>
  <div>
    <h1>
      {{ detail.title }}
    </h1>
    <div v-html="detail.content"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, query, app }) {
    const { data: detail } = await $axios.$get(
      `https://cnodejs.org/api/v1/topic/${query.id}`
    );
    return {
      detail,
    };
  },
};
</script>
<style lang="css" scoped></style>
