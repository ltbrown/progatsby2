import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Spring } from 'react-spring';
import styled from 'styled-components';
import {graphql, StaticQuery} from 'gatsby';

import Header from './header';
import Archive from './archive';
import './layout.css';

// <main> element
const MainLayout = styled.main`
  //max-width: 90%;
  max-width: 960px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`;

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           {children}
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       <Archive/>
//       </>
//     )}
//   />
// );

// using styled components
// now we have access to children AND location
// image will only show if location.pathname === '/' i.e.: home page
// const Layout = ({ children, location }) => (
// 	<StaticQuery
// 		query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//             description
//           }
//         }
//         file(relativePath: {
//       		regex: "/bg/"
//     		}) {
//     			childImageSharp {
//         		fluid(maxWidth: 1000) {
// #          		...GatsbyImageSharpFluid
//           		...GatsbyImageSharpFluid_tracedSVG
//         		}
//       		}
//   			}
//       }
//     `}
// 		render={data => (
//       <>
// 			<Header siteTitle={data.site.siteMetadata.title} />
// 			{location.pathname === '/' &&
// 				<Img fluid={data.file.childImageSharp.fluid} />
// 			}
// 			<MainLayout>
//         <div>
// 				  {children}
// 				  <footer>
// 					  © {new Date().getFullYear()}, Built with
// 					  {` `}
// 					  <a href="https://www.gatsbyjs.org">Gatsby</a>
// 				  </footer>
//         </div>
// 			  <Archive/>
// 			</MainLayout>
// 			</>
// 		)}
// 	/>
// );

// using react-spring and the Spring component
const Layout = ({ children, location }) => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: {
      		regex: "/bg/"
    		}) {
    			childImageSharp {
        		fluid(maxWidth: 1000) {
          		...GatsbyImageSharpFluid
#          		...GatsbyImageSharpFluid_tracedSVG
        		}
      		}
  			}
      }
    `}
		render={data => (
			<>
			<Header siteTitle={data.site.siteMetadata.title} />
			{/*<Spring*/}
				{/*from = {{height: 100}}*/}
				{/*to = {{height:200}}*/}
			{/*>*/}
			<Spring
				from = {{height: location.pathname === '/' ? 200 : 300}}
				to = {{height: location.pathname === '/' ? 300 : 200}}
			>
				{styles => (
					<div style = {{overflow:'hidden', ...styles}}>
						<Img fluid={data.file.childImageSharp.fluid} />
					</div>
				)}
			</Spring>
			<MainLayout>
				<div>
					{children}
					<footer>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</footer>
				</div>
				<Archive/>
			</MainLayout>
			</>
		)}
	/>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
	location: {},
};

export default Layout;
