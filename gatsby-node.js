/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// path part of node
const path = require('path');

// graphql and actions being brought in by gatsby build tool
// actions.createPage | desructured is: const { createPage } = actions;
// actions.createPage is a function that accepts an object that requires a couple of things:
// path: '/somefakepage',
// component: path.resolve('./src/components/postLayout.js')
// exports.createPages = ({ graphql, actions }) => {
// 	const { createPage } = actions;
// 	createPage({
// 		path: '/somefakepage',
// 		component: path.resolve('./src/components/postLayout.js')
// 	});
// 	createPage({
// 		path: '/somefakepages',
// 		component: path.resolve('./src/components/postLayout.js')
// 	});
// };

// what do we need to create pages - slug
// allMarkdownRemark {
// 	edges {
// 		node {
// 			frontmatter {
// 				slug
// 			}
// 		}
// 	}
// }

// create a new page based off a graphql query
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							frontmatter {
								slug
							}
						}
					}
				}
			}
		`).then(results => {
			// console.log(results.data.allMarkdownRemark.edges);
			results.data.allMarkdownRemark.edges.forEach(({node}) => {
				// console.log(node.frontmatter);
				createPage({
					path: `/posts${node.frontmatter.slug}`,
					component: path.resolve('./src/components/postLayout.js'),
					context: {
						slug: node.frontmatter.slug,
					}
				});
			});
			// resolves original promise
			resolve();
		})
	});
};