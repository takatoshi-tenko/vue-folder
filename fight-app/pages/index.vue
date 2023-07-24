<template>
  <div>
    <Hello/>
    <router-link class="btn btn-light" to="/form">
      投稿画面
    </router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="(message, i) in messages" :key="i">
        <div>
          {{ message.name }}
        </div>
        <div>
          {{ message.message }}
        </div>
      </li>
    </ul>
    <h3 class="new-function">新機能！！</h3>
    <span>今日の一言を決めてもらおう！</span>
    <nuxt-link class="about" to="/about">Aboutページに飛ぶ</nuxt-link>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue'
  export default {
  components: { Hello },
    data() {
      return {}
    },
    computed: {
      messages() {
        return this.$store.state.chat.messages
      }
    },
    async mounted(){
    }
  }
</script>

<style lang="scss">
.new {
  &-function {
    margin-top: 1rem;
  }
}
.about {
  font-size: 1rem;
  color: yellow;
  padding: 8px 16px;
  background-color: gray;
  // transition: 0.3s all ease;
  &:hover {
    color: gray;
    background-color: yellow;
    transition: 0.3s all ease;
  }
}
</style>>

</style>
