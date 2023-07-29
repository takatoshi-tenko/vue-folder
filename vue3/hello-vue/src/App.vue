<script setup lang="ts">
import { ref } from 'vue'

const whiteLadyInit: {
  id: number
  name: string
  price: number
  recipe: string
} = {
  id: 2345,
  name: 'ホワイトレディ',
  price: 1200,
  recipe: 'ジン30ml＋個ワントロー15ml＋レモン果汁＋15ml'
}
const whiteLady = ref(whiteLadyInit)
</script>

<template>
  <div>
    <template v-for="(value, key) in whiteLady" :key="key">
      <dt>{{ key }}</dt>
      <dd>{{ value }}</dd>
    </template>
  </div>
</template>
