module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jan Czizikow // Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'This is the site of Jan Czizikow, a Web Developer. The site is just a list of things he\'s been up to including blog and projects.' }
    ],
    link: [
      { rel: 'mask-icon', sizes: 'any', href: '/favicon.svg', color: "#313237"},
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#277cea' },
  loading: false,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /*
      ** Vue SVG Loader
      */
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })
    },
    vendor: ['axios', 'vuelidate', 'vue-headroom', 'breakpoint-sass']
  },
  plugins: [ '~/plugins/vuelidate'],
  generate: {
    fallback: true // custom 404.html pages
  }
}
