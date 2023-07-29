<script setup lang="ts">
import { ref } from 'vue'

const inputNameBind = ref('しんちゃん')
const inputNameOn = ref('ななし')
const onInputName = (event: Event): void => {
  const element = event.target as HTMLInputElement
  inputNameOn.value = element.value
}
</script>

<template>
  <div>
    <input type="text" :value="inputNameBind" />
    <br />
    <input type="text" @input="onInputName" />
    <p>{{ inputNameOn }}</p>
  </div>
</template>
