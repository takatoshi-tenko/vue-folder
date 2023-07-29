<script setup lang="ts">
import { ref } from "vue"

const isSendButtonDisabled = ref(false)
</script>

<template>
  <div>
    <p><button type="button" :disabled="isSendButtonDisabled">送信</button></p>
  </div>
</template>