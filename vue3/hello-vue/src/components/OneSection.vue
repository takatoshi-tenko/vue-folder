<script setup lang="ts">
interface Props {
  name: string
}

defineProps<Props>()
</script>

<template>
  <div>
    <section class="box">
      <h1>{{ name }}さんの状況</h1>
      <slot>
        <p>問題ありません。</p>
      </slot>
    </section>
  </div>
</template>

<style>
.box {
  border: green 1px solid;
}
</style>
