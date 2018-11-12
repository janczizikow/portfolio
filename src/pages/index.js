// @flow
import React from 'react';
import { graphql } from 'gatsby';
import { Hero, Projects, Cta } from '../components/Home';
import type { Project } from '../utils/types';

type Props = {
  data: {
    allProject: {
      edges: Array<{
        node: {
          thumbnail: {
            smallThumbnails: {
              fluid: string,
            },
            bigThumbnails: {
              fluid: string,
            },
          },
        } & Project,
      }>,
    },
  },
};

const Home = ({ data }: Props) => (
  <>
    <Hero />
    <Projects projects={data.allProject.edges} />
    <Cta />
  </>
);

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
