<template>
  <footer
    class="text-center text-lg-start text-white"
    style="background-color: black"
  >
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Links -->
      <section class="">
        <!--Grid row-->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 Tesla">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              德群貿易股份有限公司
            </h6>
            <p>
              Ride With Pride.<br />
              Accelerate the world's transition to sustainable energy.
            </p>
            <p></p>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 Products">
            <h6 class="text-uppercase mb-4 font-weight-bold">產品類別</h6>
            <p>
              <router-link class="text-white" to="/products">SUV</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/products">Sedan</router-link>
            </p>
            <p>
              <router-link class="text-white" to="/products"
                >Sports</router-link
              >
            </p>
          </div>

          <!-- Grid column -->
          <hr class="w-100 clearfix d-md-none" />

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 Contact">
            <h6 class="text-uppercase mb-4 font-weight-bold">聯絡方式</h6>
            <p>
              <font-awesome-icon :icon="['fas', 'house']" />
              中山區建國北路三段113巷31弄15號1樓, Taipei, Taiwan
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'envelope-open-text']" />
              Line ID : @TCT.COMTW
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'phone']" />
              <a href="tel:+886-2-25153105">02-2515-3105</a>
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-3" />

      <!-- Section: Copyright -->
      <section class="p-3 pt-0 Copyright">
        <div class="row d-flex align-items-center">
          <!-- Grid column -->
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <!-- Copyright -->
            <div class="p-3">
              © {{ currentYear }} Copyright:
              <a class="text-white" href="#">德群貿易股份有限公司</a>
            </div>
            <!-- Copyright -->
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <!-- Facebook -->
          </div>
          <!-- Grid column -->
        </div>
      </section>
      <!-- Section: Copyright -->
    </div>
    <!-- Grid container -->
  </footer>
  <!-- Footer -->
  <!-- End of .container -->
</template>

<script>
export default {
  setup() {
    const currentYear = new Date().getFullYear()
    return { currentYear }
  },
}
</script>

<style></style>
