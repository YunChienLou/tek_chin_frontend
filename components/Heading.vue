<template>
  <div
    class="d-flex justify-content-between aligns-items-end text-start border-bottom border-danger mb-3 border-5"
  >
    <h1 class="fw-bold">{{ props.heading }}</h1>
    <span><p>了解更多 >>></p></span>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";
const props = defineProps({
  heading: { type: String, require: true },
})
</script>

<style>
span {
  min-height: 50px;
  display: inline-flex;
  align-items: flex-end;
}
</style>
