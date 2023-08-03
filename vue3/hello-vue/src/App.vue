<script setup lang="ts">
import { ref } from 'vue'
import OneSection from './components/OneSection.vue'

// const taroProblemsInit: string[] = ['電話が通じません。', '留守です。']
// const taro = ref('田中太郎')
// const taroProblems = ref(taroProblemsInit)
// const jiro = ref('鈴木二郎')
</script>
<template>
  <section>
    <OneSection>
      <template v-slot="slotProps">
        <dl>
          <dt>名前</dt>
          <dd>{{ slotProps.memberInfo.name }}</dd>
          <dt>状況</dt>
          <dd>{{ slotProps.memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>
  </section>
</template>
