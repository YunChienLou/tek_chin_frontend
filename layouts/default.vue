<template>
  <div class="">
    <LoadingComponent v-if="isLoading" />
    <Navbar />
    <Nuxt />
    <FooterComponent />
    <FixButton />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import FixButton from '../components/FixButton.vue'
import { setSeoHead } from '../seo/seo-config'
import LoadingComponent from '../components/LoadingComponent.vue'

export default {
  name: 'DefaultLayout',
  components: { Navbar, FooterComponent, FixButton, LoadingComponent },
  head: setSeoHead,
  computed: {
    isLoading() {
      return this.$store.getters['store/getIsLoading']
    },
  },
}
</script>

<style></style>
