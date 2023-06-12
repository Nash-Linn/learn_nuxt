<template>
  <div class="home">
    <h1>home page</h1>

    <h4>路径参数传递</h4>
    <ul>
      <li><nuxt-link to="/goods/100">goods/100</nuxt-link></li>
      <li><nuxt-link to="/goods/100/200">goods/100/200</nuxt-link></li>
    </ul>

    <h4>查询参数传递</h4>
    <ul>
      <li><nuxt-link to="/goods?cid=100">goods?id=100</nuxt-link></li>
      <li>
        <nuxt-link to="/goods?cid=100&gid=200">goods?cid=100&gid=200</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
