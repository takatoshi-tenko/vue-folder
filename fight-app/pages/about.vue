<template>
  <div>
    <h1>Aboutページ</h1>
    <h2>{{ subtitle }}</h2>
    <p class="article-description">これはテストです。</p>
    <button @click="randomTodayDescription">今日の一言占い</button>
    <p class="today-message">{{ descriptionStatus[todayDescription].text }}</p>
    <!-- <p>{{ count }}</p> -->
    <h3>ランダムに出てくる文字列群</h3>
    <p
      v-for="(item, i) in descriptionStatus"
      :key="i"
      class="message-group"
    >{{ item.text }}</p>
    <br>
    <br>
    <br>
    <nuxt-link to="/">トップに戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  data(){
    return {
      subtitle: 'この文書はNuxt.jsの基本的な使用方法について説明しています。',
      todayDescription: 0,
      descriptionStatus: [
        { text: 'こんにちは' },
        { text: 'おはよう' },
        { text: '今日も頑張ろう！' },
        { text: '元気出してこ！！！' },
        { text: 'いい日になると予想する！！' },
        { text: '天気がいいね〜！' },
        { text: '気合を入れる時だ！！' },
      ]
    }
  },
  methods: {
    randomTodayDescription () {
      this.todayDescription = Math.floor(Math.random() * this.descriptionStatus.length)
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  &-description {
    color: red;
  }
}
.today {
  &-message {
    margin: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: orange;
    padding: 1rem 2rem;
    background-color: lightgreen;
  }
}
.message {
  &-group {
    margin-bottom: 0;
  }
}
</style>
