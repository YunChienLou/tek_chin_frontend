<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/landingPic.png"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="../assets/landingPic.png">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="../assets/landingPic.png"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/landingPic.png"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div class="mb-5">
      <div class="container serving-brands my-3">
        <Heading :heading="'經銷廠商'" />
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          <div class="col">
            <div class="p-3 border bg-light">保時捷</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">奧迪</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">福斯</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">斯柯達</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">標誌</div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">雪鐵龍</div>
          </div>
        </div>
      </div>
      <div class="container">
        <ImageGallery
          :isReverse="false"
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
      <div class="shipping container my-3">
        <Heading :heading="'配送方式'" />
        1.自取 <br />
        2.本公司外務員配送 <br />
        3.lalamove
      </div>
      <div class="online-inquery container my-3">
        <Heading :heading="'線上詢價'" />
        1.電話: <a href="tel:+886-2-25153105">02-2515-3105</a> <br />
        2.Line : @TCT.COM
      </div>
      <div class="contact-info container my-3">
        <Heading :heading="'聯絡我們'" />
        地址:中山區建國北路三段113巷31弄15號1樓, Taipei, Taiwan <br />
        電話: <a href="tel:+886-2-25153105">02-2515-3105</a> <br />
        營業時間: 週一至週五 08:30-19:00
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
import ImageGallery from '../components/ImageGallery.vue'

export default {
  layout: 'default',
  name: 'IndexPage',
  components: {
    ImageGallery,
    Heading,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
}
</script>

<style scoped>
.brand-logo {
  width: 100%;
  height: 200px;
  object-fit: contain;
}
</style>
