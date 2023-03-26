<template>
  <div class="row" :class="{ 'flex-row-reverse': props.isReverse }">
    <div class="col-sm-5 my-5 text-sm-start">
      <h1 class="display-5 font-weight-bold">{{ props.title }}</h1>
      <p class="my-3">
        {{ props.paragraph }}
      </p>
      <button type="button" class="btn btn-danger fw-bold" @click="cta()">
        {{ props.buttonText }}
      </button>
    </div>
    <div class="col d-flex flex-column overflow-hidden">
      <div class="row row-cols-4 flex-grow-1">
        <div class="col p-0" style="transform: translateY(50px)">
          <img
            class="img-item rounded my-3"
            :src="require(`@/assets/${imageUrl}`)"
            style="width: 80%"
            alt=""
          />
        </div>
        <div class="col p-0" style="transform: translateY(-60px)">
          <img
            class="img-item rounded my-3"
            :src="require(`@/assets/${imageUrl2}`)"
            style="width: 80%"
            alt=""
          />
          <img
            class="img-item rounded mb-3"
            :src="require(`@/assets/${imageUrl3}`)"
            style="width: 80%"
            alt=""
          />
        </div>
        <div class="col p-0" style="transform: translateY(70px)">
          <img
            class="img-item rounded my-3"
            style="width: 80%"
            :src="require(`@/assets/${imageUrl4}`)"
            alt=""
          />
          <img
            class="img-item rounded mb-3"
            :src="require(`@/assets/${imageUrl5}`)"
            style="width: 80%"
            alt=""
          />
        </div>
        <div class="col p-0">
          <img
            class="img-item rounded my-3"
            :src="require(`@/assets/${imageUrl6}`)"
            style="width: 80%"
            alt=""
          />
          <img
            class="img-item rounded mb-3"
            :src="require(`@/assets/${imageUrl7}`)"
            style="width: 80%"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { cta_event_log, test } from '../firebase'
import { defineProps } from 'vue'
const props = defineProps({
  isReverse: { type: Boolean, require: true },
  title: { type: String, require: true },
  paragraph: { type: String, require: true },
  buttonText: { type: String, require: true },
  imageUrl: { type: String, require: true },
  imageUrl2: { type: String, require: true },
  imageUrl3: { type: String, require: true },
  imageUrl4: { type: String, require: true },
  imageUrl5: { type: String, require: true },
  imageUrl6: { type: String, require: true },
  imageUrl7: { type: String, require: true },
})
const cta = () => {
  // cta_event_log(props.title + '/' + props.buttonText);
  console.log('cta')
}
</script>

<style scoped>
.img-item {
  width: 150px;
  height: 200px;
  object-fit: cover;
}
</style>
