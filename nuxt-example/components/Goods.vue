<template>
  <div>
    <ul>
      <li>
        {{ goods }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      goods: "电子产品",
    };
  },
};
</script>
<style lang="css" scoped></style>
