<template>
  <div>
    <ul>
      <li v-for="(item, index) in $store.state.topics" :key="index">
        <nuxt-link to="/detail">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //asyncData 只能在页面中使用
  asyncData() {
    console.log("1111");
    return {
      topics: [],
    };
  },

  //fetch 可以在组件中使用，也可以在页面中使用
  async fetch() {
    const { data: topics } = await this.$api.getTopics("/topics");
    this.$store.commit("updateTopics", topics);
  },
};
</script>
