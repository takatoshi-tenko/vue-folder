<script setup lang="ts">
import {ref} from "vue"
const url = ref('https://vuejs.org/')

</script>

<template>
  <div>
    <p><a :href="url" target="_blank">Vue.jsのサイト</a></p>
    <p><a :href="url + 'guide/introduction.html'" target="_blank">Vue.jsガイドのページ</a></p>
  </div>
</template>