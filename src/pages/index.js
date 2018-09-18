import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { Hero, Projects, Cta } from '../components/Home';

export default ({
  data,
}: {
  data: { allProject: { edges: { node: { name: string } }[] } },
}) => (
  <Layout>
    <Hero />
    <Projects projects={data.allProject.edges} />
    <Cta />
  </Layout>
);

export const pageQuery = graphql`
  query {
    allProject {
      edges {
        node {
          id
          name
          date
          slug
          category
          description
          links {
            text
            url
          }
          thumbnail {
            url
          }
        }
      }
    }
  }
`;
