<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">加</button>
    <button @click="decrement">减</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PageIndex extends Vue {
  count: number = 10;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
</script>
