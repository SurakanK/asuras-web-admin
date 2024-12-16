/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Asuras Web Admin`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Mitr`,
            file: `https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap`,
          },
        ],
      },
    },
  ]
};