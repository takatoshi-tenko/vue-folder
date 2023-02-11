<template>
  <div>
    <!-- <Hello/> -->
    <router-link class="btn btn-light" to="/form">
      投稿画面
    </router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="message in messages" :key="message">
        <div>
          {{ message.name }}
        </div>
        <div>
          {{ message.message }}
        </div>
      </li>
    </ul>
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

<style>
</style>
