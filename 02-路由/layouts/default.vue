<template>
  <div>
    <nav>
      <ul class="navs">
        <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  /* 去除默认样式 */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  /* 去除下划线 */
  text-decoration: none;
}

.navs {
  display: flex;
}

.nav-item {
  margin-right: 20px;
  font-style: 20px;
  font-weight: bold;
  color: #000;
}

a.nuxt-link-exact-active {
  color: red;
}
</style>
