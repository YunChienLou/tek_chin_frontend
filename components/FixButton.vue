<template>
  <div class="">
    <div class="fix-button">
      <button type="button" class="btn btn-lg btn-danger" @click="clickBtn">
        聯絡我們! <font-awesome-icon :icon="['fas', 'angle-up']" />
      </button>
    </div>
    <transition name="bg">
      <div
        v-if="bgShow"
        class="bg-white vh-100 vw-100 fix-background"
        @click="closeBg"
      ></div>
    </transition>
    <transition name="round">
      <div
        v-if="bgShow"
        class="bg-light border-right border-danger border-5 fix-round-shape round-shape"
        style="border-width: 3rem !important"
      >
        <div
          class="d-flex flex-column justify-content-between round-content text-black"
        >
          <div class="">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
            <h1 class="fw-bold" style="display: inline-block">Facebook</h1>
          </div>

          <div class="">
            <font-awesome-icon :icon="['fab', 'line']" />
            <h1 class="fw-bold" style="display: inline-block">Line</h1>
          </div>

          <div class="">
            <font-awesome-icon class="me-4" :icon="['fas', 'phone']" />
            <h1 class="fw-bold" style="display: inline-block">Phone</h1>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const bgShow = ref(false)
const clickBtn = () => {
  bgShow.value = true
}
const closeBg = () => {
  bgShow.value = false
}
</script>

<style scoped>
.fix-button {
  position: fixed;
  right: 30px;
  bottom: 60px;
}
.fix-background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 0.6;
}

.round-content {
  transform: translateX(3rem) translateY(10rem) rotate(90deg);
  transform-origin: bottom center;
  font-size: 3rem;
}

.fix-round-shape {
  position: fixed;
  bottom: 0;
  right: 0;
  translate: 50%;
  transform: rotate(270deg);
  transform-origin: bottom center;
}
.round-shape {
  width: 40rem;
  height: 20rem;
  z-index: 101;
  border-radius: 20rem 20rem 0 0;
}

.bg-enter-active,
.bg-leave-active {
  transition: opacity 0.5s ease;
}

.bg-enter-from,
.bg-leave-to {
  opacity: 0;
}

.round-enter-active,
.round-leave-active {
  transition: transform 0.5s ease;
}

.round-enter-from,
.round-leave-to {
  transform: rotate(180deg);
}

/* .v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 0.5s ease;
} */
</style>
