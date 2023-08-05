<script setup lang="ts">
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
const count = computed((): number => {
  return counterStore.counter;
});
const doubleCount = computed((): number => {
  return counterStore.doubleCount;
});
const onIncrementClick = () => {
  counterStore.incrementCount();
};
const resetIncrementClick = () => {
  counterStore.$reset();
};
</script>

<template>
  <div>
    <p>現在のポイント: {{ count }}</p>
    <p>現在のポイントのさらに2倍: {{ doubleCount }}</p>
    <button @click="onIncrementClick">加算</button>
    <button @click="resetIncrementClick">リセットする</button>
  </div>
</template>
