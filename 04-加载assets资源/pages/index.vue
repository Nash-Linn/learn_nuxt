<template>
  <div class="home">
    <div>
      <h1>assets目录下的图片资源</h1>

      <h3>img标签显示图片</h3>
      <img src="~assets/images/1.jpg" />

      <h3>class显示图片</h3>
      <div class="picimg"></div>

      <h3>style显示图片</h3>
      <div :style="backgroundImage"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: {
        width: "100px",
        height: "200px",
        background: `url(${require("~/assets/images/1.jpg")})`,
        backgroundSize: "contain",
      },
    };
  },
  asyncData() {
    return {};
  },
};
</script>

<style>
.picimg {
  width: 100px;
  height: 200px;
  background: url("~assets/images/1.jpg") no-repeat;
  background-size: contain;
}
</style>
