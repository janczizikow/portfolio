import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { Hero, Projects, Cta } from '../components/Home';

const propTypes = {
  data: PropTypes.shape({
    allProject: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }),
};

const Home = ({ data }) => (
  <>
    <SEO title="Web Developer" />
    <Hero />
    <Projects projects={data.allProject.edges} />
    <Cta />
  </>
);

Home.propTypes = propTypes;

export const pageQuery = graphql`
  query {
    allProject {
      edges {
        node {
          id
          name
          slug
          category
          date(formatString: "YYYY, MMM DD")
          thumbnail {
            smallThumbnails: childImageSharp {
              fluid(maxWidth: 720) {
                ...GatsbyImageSharpFluid
              }
            }
            bigThumbnails: childImageSharp {
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
