require('dotenv').config({
  path: '.env',
});

const SITE_URL = 'https://www.janczizikow.com';

module.exports = {
  siteMetadata: {
    title: 'Jan Czizikow',
    siteUrl: SITE_URL,
    description: `This is the site of Jan Czizikow, a Web Developer. The site is just a list of things he's been up to including blog and projects.`,
    author: `@jan_czizikow`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        // Setting a color is optional.
        color: '#277cea',
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jan Czizikow // Web Developer',
        short_name: 'Jan Czizikow',
        start_url: '/',
        background_color: '#277cea',
        theme_color: '#277cea',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/images/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /(assets\/images\/.*\.svg)/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // https://github.com/gatsbyjs/gatsby/issues/11006
    // I give up -_-
    // 'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        anonymize: true,
        siteSpeedSampleRate: 100,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_CONTAINER_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 5050,
        production: false,
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
