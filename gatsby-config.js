/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify").default;

module.exports = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  siteMetadata: {
    title: `Asuras Web Admin`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Mitr`,
            file: `https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
};