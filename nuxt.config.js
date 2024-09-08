export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '德群貿易',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      // Basic meta tags
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },

      // Title and description meta tags
      {
        hid: 'description',
        name: 'description',
        content: '德群貿易 | VAG 車系零件進口供應商',
      },

      { property: 'og:title', content: '德群貿易 | VAG 車系零件進口供應商' },
      {
        property: 'og:description',
        content: '德群貿易，VAG 車系零件進口供應商',
      },
      {
        property: 'og:site_name',
        content: '德群貿易 | VAG 車系零件進口供應商',
      },
      { property: 'og:locale', content: 'zh_TW' },

      // Open Graph (OG) meta tags for social media sharing
      { property: 'og:title', content: '德群貿易' },
      { property: 'og:description', content: 'VAG 車系零件進口供應商' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://example.com' },
      { property: 'og:image', content: 'https://example.com/image.jpg' },

      // Twitter Card meta tags for Twitter sharing
      { name: 'twitter:title', content: '德群貿易' },
      { name: 'twitter:description', content: 'VAG 車系零件進口供應商' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://example.com/image.jpg' },

      // Canonical URL meta tag
      { rel: 'canonical', href: 'https://example.com' },

      // Language meta tag
      { name: 'language', content: 'Traditional Chinese' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/car.ico' }],
  },

  router: {
    extendRoutes(routes) {
      routes.push({
        path: '*',
        redirect: '/', // Redirect to home
      })
    },
  },

  env: {
    SECRET_KEY: process.env.SECRET_KEY,
  },

  server: {
    host: '0.0.0.0', // Listen on all addresses
    port: 3000, // Default port
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/custom-toast.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap',
    '@/plugins/axios',
    '~/plugins/cookie.js',
    { src: '~/plugins/vue-quill-editor.js', mode: 'client' }, // Ensure it's loaded on the client side
  ],

  sitemap: {
    hostname: 'https://www.teck-chin.com.tw/', // 你的具体的网址
    path: '/sitemap.xml',
    cacheTime: 24 * 60 * 60 * 1000,
    // gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

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

    '@nuxtjs/sitemap',

    '@nuxtjs/toast',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.SERVER_URL,
    browserBaseURL: process.env.BASE_URL,
    credentials: true,
  },
  devtools: { enabled: true },

  toast: {
    duration: 3000,
    position: 'top-center',
    iconPack: 'fontawesome',
    register: [
      // Register custom toasts
      {
        name: 'app_error',
        message: (payload) => {
          // if there is no message passed show default message
          if (!payload.message) {
            return '抱歉...　發生錯誤... '
          }
          // if there is a message show it with the message
          return '抱歉... ' + payload.message
        },
        options: {
          type: 'error',
        },
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    // 指定靜態文件的輸出目錄
    dir: 'C:/Users/ryan5/Project_Files/tek_chin/src/main/resources/static',
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
}
