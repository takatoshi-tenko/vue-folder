<template>
  <div>
    <h1>
      ようこそFight appへ！
    </h1>
    <div>
      <h2>記事一覧</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
    </div>
    <form action="/" method="POST">
      <input type="text" name="fight-message" placeholder="ここに今日の一言を入力" required>
      <input type="submit" name="submit_message" value="送信">
    </form>
    <!-- <form method="post" name="form1" action="link.php">
      <input type="hidden" name="user_name" value="名前">
      <a href="javascript:form1.submit()">リンク名</a>
    </form> -->
  </div>
</template>

<script>
export default {
  name: "Hello"
}
</script>

<style scoped>
h1 {
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);
}
</style>
