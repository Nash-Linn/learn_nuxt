<template>
  <div class="home">
    <!-- 1.轮播图组件 -->
    <IndexCarousel :swipperList="swipperList" />
    <!-- 2.宫格组件 -->
    <IndexGridList :gridlist="gridlist" />
    <!-- 3.活动组件 -->
    <IndexActive />
    <!-- 4.品牌组件 -->
    <IndexBrand />
    <!-- 5.运动专区 -->
    <IndexSports :sports="sports" />
  </div>
</template>

<script>
export default {
  //  asyncData 刷新页面时，运行在服务端，服务器调用服务端接口不存在跨域
  //  跨域是浏览器端一种安全策略    解决浏览器端跨域
  async asyncData({ $api }) {
    // const  { swipperList }  = await $axios.$get("/banners");

    // 轮播图接口
    // const  { swipperList }  = await $axios.$get("/banners");
    // const  { gridlist }  = await $axios.$get("/gridlist");
    // const  { sports }  = await $axios.$get("/sports");
    
    // const { swipperList  } = await $request.$get("/banners");
    // const { gridlist  } = await $request.$get("/gridlist");
    // const { sports  } = await $request.$get("/sports");

  
    // const { swipperList  } = await $api.IndexBanners();   // 轮播图
    // const { gridlist  } = await $api.IndexGridList(); // 宫格数据
    // const { sports  } = await $api.IndexSport(); // 运动专区数据
   const [ {swipperList}, {gridlist}, {sports} ]  =  await Promise.all([ $api.IndexBanners(), $api.IndexGridList(), $api.IndexSport() ]);
    // debugger
    // if (!swipperList || !gridlist || !sports) {
    //   console.log(111);
    //    this.$router.push('/my/login');
    // }
    return {
      swipperList,
      gridlist,
      sports,
    };
  },
};
</script>
