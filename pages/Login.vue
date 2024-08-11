<template>
  <div
    id="app"
    class="container-fluid h-100 d-flex justify-content-center align-items-center"
  >
    <b-card class="w-75">
      <b-card-header>登入</b-card-header>
      <b-card-body>
        <b-form @submit.prevent="login">
          <b-form-group
            id="username-group"
            label="使用者信箱:"
            label-for="使用者信箱"
          >
            <b-form-input
              id="username"
              v-model="username"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="password-group" label="密碼:" label-for="密碼">
            <b-form-input
              id="password"
              v-model="password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary" block>登入</b-button>
        </b-form>
      </b-card-body>

      <b-alert v-if="error" variant="danger" show>{{ error }}</b-alert>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {},
  layout: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      try {
        // Check if username and password are not empty
        if (this.username && this.password) {
          // Make a POST request using Axios
          const response = await this.$axios.post('auth/authenticate', {
            email: this.username,
            password: this.password,
          })
          if (response.status == 200) {
            this.$store.commit(
              'tokens/updateAuthToken',
              response.data.access_token
            )
            this.$store.commit(
              'tokens/updateRefreshToken',
              response.data.refresh_token
            )

            this.username = ''
            this.password = ''
            this.error = ''
            this.$router.push('/admin/')
          } else {
            this.error = '登入錯誤'
            // this.$toast.error('系統錯誤')
          }
        } else {
          this.error = '請輸入帳號密碼'
          // this.$toast.error('系統錯誤')
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error)
        // Display appropriate error message to the user
        this.error = '出現錯誤，請再試一次.'
        // this.$toast.error('系統錯誤')
      }
    },
  },
}
</script>

<style></style>
