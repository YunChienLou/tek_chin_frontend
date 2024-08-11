<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">德群貿易-後臺系統</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto text-center">
          <b-nav-item>
            <b-button @click.prevent="logout">登出</b-button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'ManagerLayout',
  methods: {
    async logout() {
      const rs = await this.$axios.$post('auth/logout')
      if (rs.status === 200) {
        this.$router.push('/login')
      }
    },
  },
}
</script>

<style></style>
