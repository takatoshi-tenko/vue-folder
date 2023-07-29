<script setup lang="ts">
import { ref } from 'vue'

const htmlStr = ref('<a href="https://vuejs.org//">Vuejsのトップページ</a>')
</script>

<template>
  <div>
    {{ htmlStr }}
    <section v-html="htmlStr"></section>
    <div v-pre>
      <p v-on:click="showHello">{{ hello! }}</p>
    </div>
  </div>
</template>
