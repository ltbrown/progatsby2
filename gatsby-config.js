module.exports = {
  siteMetadata: {
    title: `Gatsby LU Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
		siteUrl: 'https://elastic-minsky-dc7639.netlify.com',
  },
  plugins: [
		`gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts`,
			}
		},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Level Up Blog`,
        short_name: `LB Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        // display: `minimal-ui`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
        icon: `src/images/gicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
		`gatsby-transformer-remark`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-netlify`, // make sure to put last in the array
  ],
};
