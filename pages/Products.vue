<template>
  <div class="">
    <LandingPic
      :image-url="img"
      :title="heading"
      :paragraph="'我們提供的零部件種類，歡迎電話詢價'"
    />
    <div class="" style="width: 100%">
      <SearchResults />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LandingPic from '../components/LandingPic.vue'
import SearchResults from '../components/SearchResults.vue'
export default {
  name: 'NewsPages',
  components: { LandingPic, SearchResults },
  setup() {
    const heading = ref('銷售產品')
    const img = ref(`car-parts.jpg`)

    return { heading, img }
  },
}
</script>

<style></style>
