<script setup lang="ts">
import { ref } from 'vue'
import OneInfo from './components/OneInfo.vue'

const propsTitle = ref('発生した乱数')
const rand = Math.round(Math.random() * 100)
const propsContent = ref(rand)
</script>

<template>
  <div>
    <h1>Props基礎</h1>
    <h2>テンプレート変数を利用</h2>
    <OneInfo :title="propsTitle" :content="propsContent" />
  </div>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
