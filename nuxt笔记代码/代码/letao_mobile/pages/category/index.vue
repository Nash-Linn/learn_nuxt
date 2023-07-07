<template>
  <div class="category">
    <van-tree-select
      height="80vh"
      :items="oneCategoryList"
      :main-active-index.sync="active"
      @click-nav="navHandle"
    >
      <!-- 二级分类 -->
      <template #content>
        <div
          class="category_sencond"
          v-for="item in twoCategory"
          :key="item.id"
        >
          <van-image width="4rem" :src="item.brandLogo" />
          <p>{{ item.brandName }}</p>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }],
    };
  },
  methods:{
    // 点击左侧一级分类触发改方法
    /**
     * index 点击左侧索引
     */
    async navHandle (index) {
      // console.log(index);
      // 替换url路由成带参数的路由
      this.$router.replace(`/category?active=${index}`);
      // 点击左侧项的id
      let id = this.oneCategoryList[index]['id'];
      // 加载二级分类
      const { twoCategory } =   await this.$api.TwoCategory(id);
      this.twoCategory = twoCategory;
    }
  },
  async asyncData({ $api, query }) {
    // 读取url中的active参数
    let active = query.active ||  0;
    let { oneCategoryList } = await $api.OneCategory();
    // 按照vant 组件对数据的要求，所以我们需要对返回的数据进行加工处理
    oneCategoryList = oneCategoryList.map((item) => {
      return {
        text: item.categoryName,
        ...item,
      };
    });

    // 加载二级分类
    const { twoCategory } = await $api.TwoCategory(
      oneCategoryList[active]["id"]
    );

    return {
      active,
      oneCategoryList,
      twoCategory,
    };
  },
};
</script>

<style>
.category_sencond {
  float: left;
  text-align: center;
}
</style>