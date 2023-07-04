<template>
  <div>
    <h1>{{ msg }}</h1>

    <div>count:{{ count }}</div>
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const msg = ref("hello nuxt");

const count = ref(0);

const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
</script>

<!-- <script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const msg = ref("hello nuxt");

    return {
      msg,
    };
  },
});
</script> -->
