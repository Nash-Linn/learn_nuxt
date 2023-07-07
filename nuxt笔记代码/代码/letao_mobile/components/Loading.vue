<template>
  <van-overlay :show="show" class="loading">
      <van-loading color="#1989fa" >加载中...</van-loading>
  </van-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: false,  // 控制遮罩的显示和隐藏
    };
  },
  methods:{
    // 1.loading开始加载
    start () {
        console.log(1);
        this.show = true;
    },
    // 2.loading结束加载
    finish () {
        console.log(2);
        this.show = false;
    }
  }
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>