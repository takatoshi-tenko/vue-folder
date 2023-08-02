<script setup lang="ts">
import { ref, computed } from 'vue'
import OneSection from './components/OneSection.vue'

const randInit = Math.round(Math.random() + 10)
const rand = ref(randInit)
const onCreateNewRand = (): void => {
  rand.value = Math.round(Math.random() * 10)
}
</script>

<template>
  <div>
    <section>
      <p>親コンポーネントで乱数を表示: {{ rand }}</p>
      <OneSection v-bind:rand="rand" v-on:createNewRand="onCreateNewRand" />
    </section>
  </div>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
