<template>
  <div>
    <Header />
    <h1 class="heading">Takatoshi Tenko</h1>
    <p class="heading__description">今から学習アプリを作っていきます。</p>
    <p>今から学習アプリを作っていきます。</p>

    <Tutorial />
    <Footer />
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
  &__description{
    color: green;
  }
}
</style>
