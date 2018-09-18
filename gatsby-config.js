require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Jan Czizikow // Web Developer',
    siteUrl: 'https://www.janczizikow.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-flow',
    'gatsby-plugin-eslint',
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
        name: 'gatsby-sleek-starter',
        short_name: 'sleek',
        start_url: '/',
        background_color: '#277cea',
        theme_color: '#277cea',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-favicon',
    //   options: {
    //     logo: 'src/assets/images/gatsby-icon.png',
    //     injectHTML: true,
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       twitter: false,
    //       yandex: false,
    //       windows: false,
    //     },
    //   },
    // },
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
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
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
        production: true,
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
};
