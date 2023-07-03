<template>
  <div>
    <ul>
      <li v-for="(item, index) in $store.state.topics" :key="index">
        <nuxt-link :to="`/detail?id=${item.id}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch({ app, store }) {
    const { data: topics } = await app.$api.getTopics("/topics");
    store.commit("updateTopics", topics);
  },
};
</script>
