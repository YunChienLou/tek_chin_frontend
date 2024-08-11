<template>
  <div class="about">
    <LandingPic
      :image-url="img"
      :title="heading"
      :paragraph="'致力於給您最好的服務'"
    />
    <div class="container my-5">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import LandingPic from '../components/LandingPic.vue'
import PostCard from '../components/PostCard.vue'

export default {
  name: 'NewsPage',
  components: {
    LandingPic,
    PostCard,
  },
  layout: 'default',
  async asyncData(context) {
    const posts = await context.$axios.$get('post/query', {
      enable: true,
    })
    return { posts }
  },
  data() {
    return {
      heading: '最新消息 !',
      img: 'car-parts.jpg',
    }
  },
}
</script>

<style scoped>
.img-item {
  width: 150px;
  height: 200px;
  object-fit: cover;
}
</style>
