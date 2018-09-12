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
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'mask-icon', sizes: 'any', href: '/favicon.svg', color: "#313237" },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      // vueLoader.options.transformToRequire['img'] = ['src', 'data-lowsrc']
      /*
      ** Vue SVG Loader
      */
      const svgRule = config.module.rules.find(rule => rule.loader === 'url-loader')
      svgRule.test = /\.(png|jpe?g|gif)$/;

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'vue-svg-loader',
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      });
    },
    vendor: [
      'vuelidate',
      'lazysizes',
      'lazysizes/plugins/parent-fit/ls.parent-fit',
      'lazysizes/plugins/object-fit/ls.object-fit',
      // 'lazysizes/plugins/blur-up/ls.blur-up',
      // 'lazysizes/plugins/attrchange/ls.attrchange'
    ]
  },
  plugins: [ '~/plugins/vuelidate'],
  generate: {
    fallback: true // custom 404.html pages
  },
  modules: [
    ['nuxt-sass-resources-loader', '@@/assets/shared.scss'],
    '@nuxtjs/webpackmonitor',
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-NBBVPGQ',
      pageTracking: true,
     }
    ],
    '@nuxtjs/sitemap',
    ['nuxt-social-meta', {
      url: 'https://www.janczizikow.com',
      title: 'Jan Czizikow // Web Developer',
      description: 'This is the site of Jan Czizikow, a Web Developer. The site is just a list of things he\'s been up to including blog and projects.',
      img: 'https://www.janczizikow.com/open_graph.jpg',
      locale: 'en_US',
      twitter: '@jan_czizikow',
      themeColor: '#277cea'
    }],
  ],
  sitemap: {
    hostname: 'https://www.janczizikow.com',
    generate: true,
    exclude: [
      '/login',
      '/dashboard/**',
    ],
    // FIXME: Make this dynamic
    // https://www.npmjs.com/package/@nuxtjs/sitemap
    routes:[
      '/projects/skatespots',
      '/projects/jekyll-sleek',
      '/projects/blanccstate',
      '/projects/the-clinic',
      '/projects/minimal-portfolio',
    ]
  }
}
