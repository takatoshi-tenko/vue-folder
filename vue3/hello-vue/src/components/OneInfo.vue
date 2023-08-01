<script setup lang="ts">
interface Props {
  title: string
  content: string
}
defineProps<Props>()
</script>

<template>
  <div>
    <section class="box">
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
    </section>
  </div>
</template>

<style>
  .box {
    border: green 1px solid;
    margin: 10px;
  }
</style>