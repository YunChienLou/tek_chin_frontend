export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '德群貿易',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 项目里要使用的 SCSS 文件
    // '@/assets/scss/app.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/bootstrap'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDGnm0w27a0fMztIAKD5lNxdkRzwnqI9f8',
          authDomain: 'de-chyun.firebaseapp.com',
          projectId: 'de-chyun',
          storageBucket: 'de-chyun.appspot.com',
          messagingSenderId: '259504563150',
          appId: '1:259504563150:web:a48a3a243a79551c90419f',
          measurementId: 'G-F4830JZ236',
        },
        services: {
          analytics: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
