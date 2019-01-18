import React from 'react';
import styled from 'styled-components';
import {graphql, Link, StaticQuery} from 'gatsby';

import Image from '../components/image';
import SEO from '../components/seo';

const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
            order: DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        slug
                    }
                }
            }
        }
    }
`;

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
  	color: #000;
  	text-decoration: none;
  }
  h2 {
  	margin-bottom: 0;
  }
  p {
  	font-size: 0.8rem;
  }
  .read-more {
  	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  	font-size: 0.8rem;
  	text-decoration: underline;
  	color: #524763;
  }
`;


// const Listing = () => (
// 	<div>
// 		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
// 		<h1>Hi people</h1>
// 		<p>Welcome to your new Gatsby site.</p>
// 		<p>Now go build something great.</p>
// 		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// 			<Image />
// 		</div>
// 		<Link to="/page-2/">Go to page 2</Link>
// 		<Link to="/about/">About Us</Link>
// 	</div>
// );

// const Listing = () => (
// 		<StaticQuery
// 			query={LISTING_QUERY}
// 			render={({ allMarkdownRemark }) => (
// 				allMarkdownRemark.edges.map(edge => (
// 					<article key={edge.node.frontmatter.slug}>
// 						<h2>{edge.node.frontmatter.title}</h2>
// 						<p>{edge.node.frontmatter.date}</p>
// 						<p>{edge.node.excerpt}</p>
// 						<Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
// 					</article>
// 				))
// 			)}
// 		/>
// );

// destructure { node } - will remove need for edge.node...
// const Listing = () => (
// 	<>
// 	<SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
// 	<StaticQuery
// 		query={LISTING_QUERY}
// 		render={({allMarkdownRemark}) => (
// 			allMarkdownRemark.edges.map(({node}) => (
// 				<article key={node.frontmatter.slug}>
// 					<Link to={`/posts${node.frontmatter.slug}`}>
// 						<h2>{node.frontmatter.title}</h2>
// 					</Link>
// 					<p>{node.frontmatter.date}</p>
// 					<p>{node.excerpt}</p>
// 					<Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
// 				</article>
// 			))
// 		)}
// 	/>
// 	<div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
// 		<Image/>
// 	</div>
// 	</>
// );

// styled components
const Listing = () => (
	<>
	<SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
	<StaticQuery
		query={LISTING_QUERY}
		render={({allMarkdownRemark}) => (
			allMarkdownRemark.edges.map(({node}) => (
				<Post key={node.frontmatter.slug}>
					<Link to={`/posts${node.frontmatter.slug}`}>
						<h2>{node.frontmatter.title}</h2>
					</Link>
					<p>{node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
					<Link className="read-more" to={`/posts${node.frontmatter.slug}`}>Read More</Link>
				</Post>
			))
		)}
	/>
	<div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
		<Image/>
	</div>
	</>
);

export default Listing;