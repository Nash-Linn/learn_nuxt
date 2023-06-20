<template>
  <div>
    <h1>parent页面（一级路由）</h1>
    <nav>
      <ul>
        <li><nuxt-link to="/parent/child1">Child1</nuxt-link></li>
        <li><nuxt-link to="/parent/child2">Child2</nuxt-link></li>
      </ul>
      <!-- 占位 当匹配到二级路由 对应的页面显示在下面-->
      <nuxt-child />
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css" scoped></style>
