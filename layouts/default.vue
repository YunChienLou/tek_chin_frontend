<template>
  <div class="">
    <Navbar />
    <Nuxt />
    <Footer />
    <FixButton />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/FooterComponent.vue'
import FixButton from '../components/FixButton.vue'
export default {
  components: { Navbar, Footer, FixButton },
}
</script>

<style></style>
