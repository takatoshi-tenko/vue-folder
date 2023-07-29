<script setup lang="ts">
import { ref } from 'vue'
const widthOrHeight = ref('Height')
const widthOrHeightValue = ref(100)
</script>

<template>
  <div>
    <p><img src="./assets/logo.svg" alt="VueLogo" :[widthOrHeight]="widthOrHeightValue" /></p>
  </div>
</template>
