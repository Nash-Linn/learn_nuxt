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
  // async asyncData({ $axios, query, app }) {
  //   const { data: detail } = await $axios.$get(
  //     `https://cnodejs.org/api/v1/topic/${query.id}`
  //   );
  //   return {
  //     detail,
  //   };
  // },

  async asyncData({ $axios, params, app }) {
    const { data: detail } = await $axios.$get(
      `https://cnodejs.org/api/v1/topic/${params.id}`
    );
    return {
      detail,
    };
  },
};
</script>
<style lang="css" scoped></style>
