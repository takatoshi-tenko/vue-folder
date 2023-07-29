<script setup lang="ts">
import { ref } from 'vue'
const imgAttributes = ref({
  src: '/images/logo.svg',
  alt: 'VUeのロゴ',
  width: 75,
  height: 75
})
</script>

<template>
  <div>
    <p><img :="imgAttributes" /></p>
    <p><img v-bind="imgAttributes" title="ろごです！" /></p>
    <p><img v-bind="imgAttributes" alt="ロゴです！" /></p>
  </div>
</template>
