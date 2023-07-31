<script setup lang="ts">
import WithModel from './components/WithModel.vue'
</script>

<template>
  <div>
    <h1>コンポーネントの独立性</h1>
    <section>
      <h2>v-modelを含むコンポーネント</h2>
      <WithModel />
      <WithModel />
    </section>
  </div>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
