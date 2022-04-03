<template>
  <div class="container">
    <b-spinner />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component({})
export default class App extends Vue {
  mounted () {
    this.$router.push({ name: 'memo' })
  }
}
</script>
