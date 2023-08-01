<script setup lang="ts">
import { ref } from 'vue'
import OneInfo from './components/OneInfo.vue'

const weatherListInit = new Map<number, Weather>()
weatherListInit.set(1, { id: 1, title: '今日の天気', content: '今日は1日中、晴れでしょう' })
weatherListInit.set(2, { id: 2, title: '明日の天気', content: '明日は1日中、雨でしょう' })
weatherListInit.set(3, { id: 3, title: '明後日の天気', content: '明後日は1日中、雪でしょう' })
const weatherList = ref(weatherListInit)
interface Weather {
  id: number
  title: string
  content: string
}
</script>

<template>
  <div>
    <h1>Props基礎</h1>
    <OneInfo v-for="[id, weather] in weatherList" :key="id" :content="weather.content" />
  </div>
</template>

<style>
section {
  border: blue 1px solid;
  margin: 10px;
}
</style>
