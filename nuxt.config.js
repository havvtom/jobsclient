let env = require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'jobsclient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    './plugins/vue-select'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  auth: {
  strategies: {
    local: {
      token: {
        property: 'data.token',
        // required: true,
        // type: 'Bearer'
      },
      user: {
        property: 'data',
        // autoFetch: true
      },
      endpoints: {
        login: { url: 'auth/login', method: 'post' },
        logout: { url: 'auth/logout', method: 'post' },
        user: { url: 'auth/user', method: 'get' }
      }
    }
  }
},

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: env.parsed.API_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}