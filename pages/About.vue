<template>
  <div class="about">
    <LandingPic
      :image-url="img"
      :title="heading"
      :paragraph="'德群貿易，成立20年來的故事...'"
    />
    <div class="container my-5">
      <ImageGallery
        :is-reverse="true"
        :title="'專業零件供應商'"
        :paragraph="'本公司成立至今已有20餘年，為專業進口歐洲汽車零件貿易商。銷售各歐系車品牌Volkswagen、Audi、Porsche、SKODA、BMW、Peugeot、Citroen等正廠零件及OEM零件，供應全車系的零配件至全台零件商及保修廠。銷售眾多汽車零件知名大牌，例：ZF、HELLA、VALEO、BOSCH、TRW、VDO、MEYLE...等。'"
        :button-text="'了解更多'"
        :image-url="'p1.jpeg'"
        :image-url2="'p2.jpeg'"
        :image-url3="'p3.jpeg'"
        :image-url4="'p4.jpg'"
        :image-url5="'car-repair.jpg'"
        :image-url6="'car-parts.jpg'"
        :image-url7="'p3.jpeg'"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LandingPic from '../components/LandingPic.vue'
export default {
  name: 'AboutPage',
  components: { LandingPic },
  setup() {
    const heading = ref('公司沿革')
    const img = ref(`car-repair.jpg`)

    return { heading, img }
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
