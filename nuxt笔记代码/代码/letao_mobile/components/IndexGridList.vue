<template>
  <div class="grid">
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in gridlist" :key="item.id">
        <van-image :src="item.img_src" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script> 

 export default {
   props:['gridlist']

 } 

</script>