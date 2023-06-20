<template lang="pug">
  //- <div class="home">
  //-   <h1>Hello World</h1>
  //-   <p>this page use pug</p>
  //- </div>

  div 
      h1 Hello World
      p this page use pug
      img(src="~/assets/images/1.jpg" )
</template>

<script>
export default {
  asyncData() {
    return {};
  },
};
</script>

<style lang="scss" scope>
h1 {
  color: $primary;
}
</style>
