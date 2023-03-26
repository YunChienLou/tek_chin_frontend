<template>
  <div class="row" style="width: 100%">
    <div class="col-sm-3 pr-0">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="secondary"
              >依廠牌分類</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-nav vertical class="">
                <b-nav-item active>保時捷</b-nav-item>
                <b-nav-item>奧迪</b-nav-item>
                <b-nav-item>福斯</b-nav-item>
                <b-nav-item>標誌</b-nav-item>
                <b-nav-item>斯柯達</b-nav-item>
                <b-nav-item>雪鐵龍</b-nav-item>
              </b-nav>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="secondary"
              >依車輛部位分類</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-nav vertical class="">
                <b-nav-item active>內裝</b-nav-item>
                <b-nav-item>外觀</b-nav-item>
                <b-nav-item>引擎室</b-nav-item>
                <b-nav-item>車輪</b-nav-item>
              </b-nav>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="secondary"
              >依原產地分類</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body
              ><b-nav vertical class="">
                <b-nav-item active>美國</b-nav-item>
                <b-nav-item>德國</b-nav-item>
                <b-nav-item>比利時</b-nav-item>
              </b-nav>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>
    <div class="col-sm-9 pr-0">
      <Heading :heading="'搜尋結果'" class="mt-5" />
      <div
        class="row mx-5 text-start row-cols-auto overflow-auto"
        style="max-height: 80vh; width: 80%"
      >
        <div v-for="i in 20" :key="i" class="col">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-outline-danger">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue'
export default {
  components: {
    Heading,
  },
}
</script>

<style scoped>
.accordion-body {
  padding: 0% 1rem;
}
</style>
