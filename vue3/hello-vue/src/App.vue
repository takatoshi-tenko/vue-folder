<script setup lang="ts">
import { ref } from 'vue'

const cocktailLIstInit: { [key: number]: string } = {
  2345: 'ホワイトレディ',
  4412: 'ブルーハワイ',
  6792: 'ニューヨーク'
}
const cocktailList = ref(cocktailLIstInit)
</script>

<template>
  <div>
    <ul>
      <li v-for="(cocktailName, id) in cocktailList" :key="'cocktailList' + id">
        IDが{{ id }}のカクテルは{{ cocktailName }}
      </li>
    </ul>
    <ul>
      <li v-for="(cocktailName, id, index) in cocktailList" :key="'cocktailListWithIdx' + id">
        {{ index + 1 }}: IDが {{ id }}のカクテルは{{ cocktailName }}
      </li>
    </ul>
  </div>
</template>
