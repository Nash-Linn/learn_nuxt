<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/fade">fade</nuxt-link></li>
        <li><nuxt-link to="/bounce">bounce</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  middleware: "auth2",
};
</script>
<style scoped></style>
