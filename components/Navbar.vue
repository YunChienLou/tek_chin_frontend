<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">德群貿易</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto text-center">
        <b-nav-item>
          <NuxtLink class="nav-link" to="/">首頁</NuxtLink>
        </b-nav-item>

        <b-nav-item>
          <NuxtLink class="nav-link" to="/News">最新消息</NuxtLink>
        </b-nav-item>

        <b-nav-item>
          <NuxtLink class="nav-link" to="/About">公司沿革</NuxtLink>
        </b-nav-item>

        <!-- <b-nav-item
          ><NuxtLink class="nav-link" to="/Products"
            >銷售產品</NuxtLink
          ></b-nav-item
        > -->

        <b-nav-item
          ><NuxtLink class="nav-link" to="/Contact"
            >聯絡方式</NuxtLink
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  setup() {},
}
</script>

<style scoped>
.router-link-active {
  color: #ffffff;
  font-weight: bold;
  padding-bottom: 0;
  border-bottom: 2px solid red;
}
@media screen and (max-width: 600px) {
  .router-link-active {
    color: #ffffff;
    font-weight: bold;
    padding-bottom: 0;
    border-bottom: 0px;
  }
}
</style>
