<template>
  <div
    class="d-flex justify-content-between aligns-items-end text-start border-bottom border-danger mb-3 border-5"
  >
    <h1 class="display-5 font-weight-bold">{{ props.heading }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: { type: String, require: true },
})
</script>

<style scoped>
span {
  min-height: 50px;
  display: inline-flex;
  align-items: flex-end;
}
</style>
