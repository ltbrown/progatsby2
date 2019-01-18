import React, {Component} from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

// Static Query
// Used anywhere, doesn't accept variables, can't use context

// Page Query
// Must be used on pages

class postLayout extends Component {
	render() {
		const { markdownRemark } = this.props.data;
		// pass down location so we know what page we are on
		const { location } = this.props;
		return (
			<Layout location={location}>
				<h1>{markdownRemark.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{
					__html: markdownRemark.html
				}} />
			</Layout>
		);
	}
}

export default postLayout;

// since Gatsby is its own system, what's happening is that we're setting the context $slug to be $slug. Has to be same
// name as in the gatsby-node.js i.e.: context > slug:
export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
                eq: $slug
            }
        }) {
            html
            frontmatter {
                title
                date
                slug
            }
        }
    }
`;