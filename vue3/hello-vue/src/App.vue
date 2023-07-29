<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('未送信')
const onFormSubmit = (): void => {
  msg.value = '送信されました'
}
</script>

<template>
  <div>
    <form action="#" @submit.prevent="onFormSubmit">
      <input type="text" required />
      <button type="submit">送信</button>
    </form>
    <p>{{ msg }}</p>
  </div>
</template>
