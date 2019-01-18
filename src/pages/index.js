import React from 'react';

import Layout from '../components/layout';
import Listing from '../components/listing';

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//     <Link to="/about/">About Us</Link>
//   </Layout>
// );

// const IndexPage = () => (
// 	<Layout>
// 		<Listing />
// 	</Layout>
// );

// pass in location prop so we can determine what page we are on
// layout system in Gatsby 1 different and there were some automatic passing of props
const IndexPage = ( {location} ) => (
	<Layout location={location}>
		<Listing />
	</Layout>
);

export default IndexPage;
