<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  id: number
  name: string
  email: string
  points: number
  note?: string
}

const props = defineProps<Props>()
const localPoints = ref(props.points)
const localNote = computed((): string => {
  let localNote = props.note
  if (localNote == undefined) {
    localNote = '--'
  }
  return localNote
})
const pointUp = (): void => {
  localPoints.value++
}
</script>

<template>
  <div>
    <section>
      <h4>{{ name }}さんの情報</h4>
      <dl>
        <dt>ID</dt>
        <dd>{{ id }}</dd>
        <dt>メールアドレス</dt>
        <dd>{{ email }}</dd>
        <dt>保有ポイント</dt>
        <dd>{{ points }}</dd>
        <dt>備考</dt>
        <dd>{{ localNote }}</dd>
      </dl>
      <button @click="pointUp">ポイント加算</button>
    </section>
  </div>
</template>
