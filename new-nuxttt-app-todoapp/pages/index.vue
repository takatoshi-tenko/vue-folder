<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <the-header />
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script lang="ts">
import TheHeader from "~/components/Navigation/TheHeader.vue";
import PostList from "~/components/Posts/PostList.vue";

export default {
  components: {
    PostList,
    TheHeader,
  },
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },

  asyncData(context, callback) {
    console.log(context)
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: "First Post",
            previewText: "This is our first post!",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          },
          {
            id: "2",
            title: "Second Post",
            previewText: "This is our second post!",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          },
          {
            id: "3",
            title: "Third Post",
            previewText: "This is our third post!",
            thumbnail:
              "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
          },
        ],
      });
    }, 1500);
  },
};
</script>
