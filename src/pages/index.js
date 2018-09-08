import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from 'layout';
import Counter from 'containers/Counter';

const propTypes = {
  data: PropTypes.instanceOf(Object),
};

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ flex: '0 0 150px', maxWidth: 150, marginRight: 30 }}>
        <Image
          style={{ width: '100%', height: 'auto', verticalAlign: 'middle' }}
          fluid={data.iconImage.childImageSharp.fluid}
        />
      </div>
      <div style={{ flex: '0 0 auto', maxWidth: '100%' }}>
        <Counter />
      </div>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

IndexPage.propTypes = propTypes;

export default IndexPage;

export const pageQuery = graphql`
  query {
    iconImage: file(relativePath: { regex: "/icon/" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
