const pkg = require('./package')
const extendConfig = require('./webpack.config.extend')

module.exports = {
  mode: 'spa',
  srcDir: 'src/',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    stylus: [
      '~/assets/style/variables.styl',
      '~/assets/style/mixins.styl'
    ]
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      extendConfig(config)
    }
  },

  /*
   ** Extensions
   */
  extensions: ['ts', 'js']
}
