<script setup lang="ts">
import { ref } from 'vue'

const pBgColor = ref('white')
const onPClick = (bgColor: string): void => {
  pBgColor.value = bgColor
}
</script>

<template>
  <div>
    <p @click="onPClick('red')" :style="{ backgroundColor: pBgColor }">
      ここをクリックすると背景色が変わります。
    </p>
  </div>
</template>
