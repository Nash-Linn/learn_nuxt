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
  async asyncData({ query, app }) {
    const { data: detail } = await app.$api.getDetail(`/topic/${query.id}`);
    return {
      detail,
    };
  },
};
</script>
<style lang="css" scoped></style>
