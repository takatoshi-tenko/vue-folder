<script setup lang="ts">
interface Props {
  rand: number
}

interface Emits {
  (event: 'createNewRand'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
const onNewRandButtonClick = (): void => {
  emit('createNewRand')
}
</script>

<template>
  <div>
    <section>
      <p>子コンポーネントで乱数を表示{{ rand }}</p>
      <button @click="onNewRandButtonClick">新たな乱数を発生</button>
    </section>
  </div>
</template>
