/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:'Gatsby Learning',
    author: 'Rahul Rawade'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'pagwu48xmjy1',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'm_3ioUXhKxUOIBlA21WlAxaoPkLbZQi4kF4J0dBbULY'
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
             
              maxWidth: 590,
            }
          }
      ]
      }
    }
    
  ]


}
