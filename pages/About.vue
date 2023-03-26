<template>
  <div class="about">
    <LandingPic
      :imageUrl="img"
      :title="heading"
      :paragraph="'德群貿易，成立30年來的故事...'"
    />
    <div class="container">
      <ImageGallery
        :isReverse="true"
        :title="'專業零件供應商'"
        :paragraph="'本公司成立至今已有20餘年，為專業進口歐洲汽車零件貿易商。銷售各歐系車品牌Volkswagen、Audi、Porsche、SKODA、BMW、Peugeot、Citroen等正廠零件及OEM零件，供應全車系的零配件至全台零件商及保修廠。銷售眾多汽車零件知名大牌，例：ZF、HELLA、VALEO、BOSCH、TRW、VDO、MEYLE...等。'"
        :buttonText="'了解更多'"
        :imageUrl="'p1.jpeg'"
        :imageUrl2="'p2.jpeg'"
        :imageUrl3="'p3.jpeg'"
        :imageUrl4="'p4.jpg'"
        :imageUrl5="'p1.jpeg'"
        :imageUrl6="'p2.jpeg'"
        :imageUrl7="'p3.jpeg'"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LandingPic from '../components/LandingPic.vue'
export default {
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
