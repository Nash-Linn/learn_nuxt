<template>
  <div class="cz_live">
    <img src="images/title1.png" alt="" />
    <div class="mui-clearfix">
      <a href="#" class="cz_product" v-for="item in sports" :key="item.id">
        <div class="box">
          <img src="/images/product.jpg" alt="" />
          <p class="name">{{ item.name }}</p>
          <p>
            <span class="price">¥{{ item.price }}</span
            ><span class="oldPrice">¥{{ item.oldPrice }}</span>
          </p>
          <button class="button">立即购买</button>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:['sports']
}
</script>


<style scoped>
.cz_live {
  padding: 0 10px;
  margin-top: 10px;
  overflow: hidden;
  padding-bottom: 100px;
}
.cz_live > img {
  width: 100%;
}

.mui-clearfix:after {
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.mui-clearfix {
  /* 触发 hasLayout */
  zoom: 1;
}

.cz_product {
  float: left;
  width: 50%;
  padding: 0 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.cz_product .box {
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  text-align: center;
  padding: 10px 0;
}
.cz_product .box img {
  width: 100%;
}
.cz_product .box .name {
  padding: 0 10px;
  height: 36px;
  line-height: 18px;
  overflow: hidden;
}
.cz_product .box .price {
  font-size: 12px;
  color: #f30;
  margin-right: 10px;
}
.cz_product .box .oldPrice {
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
}
.cz_product .box .button {
  background: #006699;
  color: #fff;
}
</style>