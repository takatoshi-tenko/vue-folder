<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('まだです！')
const onEnterKey = (): void => {
  msg.value = 'エンターキーが押下しました。'
}
const onUpKey = (): void => {
  msg.value = 'エンターキーが上に押下しました。'
}
const onRightButtonClick = (): void => {
  msg.value = 'ボタンが右クリックされました'
}
const onShiftClick = (): void => {
  msg.value = 'シフトを押しながらクリックしました。'
}
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <input type="text" @keydown.enter="onEnterKey" /><br />
    <input type="text" @keydown.up="onUpKey" /><br />
    <button @click.right="onRightButtonClick">右クリック</button><br />
    <button @click.shift="onShiftClick">シフトを押しながらクリック</button>
  </div>
</template>
