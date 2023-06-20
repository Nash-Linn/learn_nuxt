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
export default {};
</script>
<style scoped>
/* 过度开始前和过度结束后隐藏 */
.page-enter,
.page-leave-to {
  opacity: 0;
}

/* 过度激活状态显示 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

/* 自定义动画 动画进入前*/
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}

/* 动画结束后 */
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(0);
  }
}
</style>
