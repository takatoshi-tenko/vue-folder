<template>
  <div>
    <h1 class="heading">Takatoshi Tenko</h1>

    <Tutorial />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '~/assets/css/style.scss'

export default Vue.extend({
  name: 'IndexPage'
})
</script>

<style lang="scss">
.heading {
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: skyblue;
}
</style>
