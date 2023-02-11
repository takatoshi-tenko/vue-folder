<template>
  <div>
    <h1>Aboutページ</h1>
    <h2>{{ subtitle }}</h2>
    <p class="article-description">これはテストです。</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      subtitle: 'この文書はNuxt.jsの基本的な使用方法について説明しています。'
    }
  },
}
</script>

<style lang="scss" scoped>
.article {
  &-description {
    color: red;
  }
}
</style>
