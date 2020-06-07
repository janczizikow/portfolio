import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { Hero, Projects, Cta } from '../components/Home';

const propTypes = {
  data: PropTypes.shape({
    allStrapiProject: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

const Home = ({ data }) => (
  <>
    <SEO title="Software Developer" />
    <Hero />
    <Projects projects={data.allStrapiProject.edges} />
    <Cta />
  </>
);

Home.propTypes = propTypes;

export const pageQuery = graphql`
  query {
    allStrapiProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          date(formatString: "YYYY, MMM DD")
          thumbnail {
            smallThumbnail: childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
            bigThumbnail: childImageSharp {
              fluid(maxWidth: 1140) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;
