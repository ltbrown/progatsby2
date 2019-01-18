import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// import gatsbyLogo from '../images/gatsby-icon.png';
import logo from '../images/logo.svg';

const HeaderWrapper = styled.div`
  background: #524763;
  img {
  	margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.3rem;

`;

// const Header = ({ siteTitle }) => (
//   <div
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           <img
//             style={{
//               width: '100px',
//             }}
//             src={gatsbyLogo}
//             alt="Gatsby Logo"
//           />
//           {/*{siteTitle}*/}
//         </Link>
//       </h1>
//     </div>
//   </div>
// );

const Header = ({ siteTitle }) => (
	<HeaderWrapper>
		<HeaderContainer>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					<img
						style={{
							width: '100px',
						}}
						src={logo}
						alt="LU Logo"
					/>
					{/*{siteTitle}*/}
				</Link>
			</h1>
		</HeaderContainer>
	</HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
