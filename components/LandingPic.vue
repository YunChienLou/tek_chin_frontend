<template>
  <div class="position-relative">
    <img :src="require(`@/assets/${imageUrl}`)" class="imgSize" alt="..." />
    <div class="bg-dark border border-white p-3 p-sm-4 text-white text-card">
      <h2 class="">
        {{ props.title }}
      </h2>
      <p>{{ props.paragraph }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: { type: String, required: true },
  paragraph: { type: String, require: false },
  imageUrl: { type: String, require: true },
})
</script>

<style scoped>
.imgSize {
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
.text-card {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 10px solid snow;
  transform: translate(-50%, -50%);
}
</style>
>
