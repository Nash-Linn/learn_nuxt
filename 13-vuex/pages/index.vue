<template>
  <div>
    <!-- <h1>{{ $store.state.count }}</h1> -->
    <h1>{{ count }}</h1>
    <h1>{{ $store.state.todolist.list }}</h1>
    <van-button type="primary" @click="increment(10)">同步加</van-button>
    <van-button type="primary" @click="asyncIncrement(20)">异步加</van-button>
    <hr />
    <h1>新增一个随机数</h1>
    <h1>{{ $store.state.randomNum }}</h1>
    <van-button type="primary" @click="addRandomNum">新增一个随机数</van-button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  // methods: {
  //   increment() {
  //     this.$store.commit("increment", 10);
  //   },
  //   asyncIncrement() {
  //     this.$store.dispatch("asyncIncrement", 20);
  //   },
  // },

  computed: {
    // mapState 调用之后返回一个对象
    ...mapState(["count"]),
  },

  methods: {
    ...mapMutations(["increment"]),
    ...mapActions(["asyncIncrement"]),

    addRandomNum() {
      //随机数
      const randomNum = this.getRandom(10, 20);

      //修改 store/index 中的 randomNum
      this.$store.commit("updateRamdomNum", randomNum);

      //修改 store/todolist 中的 list
      this.$store.commit("todolist/updateList", randomNum);
    },

    //生成 min - max 之间的随机数
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>
