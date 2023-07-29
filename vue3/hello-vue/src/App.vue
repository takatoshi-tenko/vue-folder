<script setup lang="ts">
import { ref } from 'vue'

const trimedText = ref('')
</script>

<template>
  <div>
    <input type="text" v-model.trim="trimedText" />
    <p>入力文字列：{{ trimedText }}</p>
  </div>
</template>
