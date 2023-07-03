<template>
  <div>
    <div>msg:{{ msg }}</div>
    <div>age:{{ age }}</div>
    <Goods />
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
    };
  },

  asyncData() {
    return {
      msg: "hello",
    };
  },
  fetch() {
    this.age = 20;
  },
};
</script>
