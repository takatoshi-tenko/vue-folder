<script setup lang="ts">
import { reactive } from 'vue'
// interface Props {
//   name: string
// }

// defineProps<Props>()

const memberInfo = reactive({
  name: '田中太郎',
  state: '問題ありません。'
})
</script>

<template>
  <div>
    <section class="box">
      <slot :memberInfo="memberInfo">
        <h1>{{ memberInfo.name }}さんの状況</h1>
        <p>{{ memberInfo.state }}</p>
      </slot>
    </section>
  </div>
</template>

<style>
.box {
  border: green 1px solid;
}
</style>
