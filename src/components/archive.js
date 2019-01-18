import React from 'react';
import styled from 'styled-components';
import {graphql, StaticQuery, Link} from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
        allMarkdownRemark(limit:5, sort: {
            order: DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`;

// styled component in place of <ul>
const ArchiveLlist = styled.div`
  padding: 0;
  margin:0;
  list-style: none;
  a {
  	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  	font-size: 0.8rem;
  	text-decoration: underline;
  	color: #524763;
  }
`;

// aside = not main content, represents a section of the page that's tangentially related
const Archive = () => (
	<StaticQuery
		query={POST_ARCHIVE_QUERY}
		render={({allMarkdownRemark}) => (
			<>
			<aside>
				<h3>Archive</h3>
				<ArchiveLlist>
					{allMarkdownRemark.edges.map(edge => (
						<li key={edge.node.frontmatter.slug}>
							<Link to={`/posts/${edge.node.frontmatter.slug}`}>
								{edge.node.frontmatter.title}
							</Link>
						</li>
					))}
				</ArchiveLlist>
			</aside>
			</>
		)}
	/>
);

export default Archive;
