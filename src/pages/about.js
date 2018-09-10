// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Flex, Box } from '@rebass/grid/emotion';

import Layout from 'layout';
import Container from 'components/Container';
import Button from 'components/Button';

export default ({ data }) => (
  <Layout>
    <Box py="3rem">
      <Container>
        <Flex alignItems="center" flexWrap="wrap">
          <Box px={16} width={[1, 1, 1, 1 / 2]}>
            <h1>Hey, nice to meet you!</h1>
            <p>
              I’m Jan, 26 year old web developer from Poland. I’m that guy on
              the picture enjoying Thai Wake Park and trying to wakeboard for
              the first time - it was a blast! Anyways, back to serious stuff,
              during my business studies at collage I got interested in building
              websites. After graduating I worked for roughly a year as a UX
              Project Manager in an e-commerce company. As my job involved
              working with UX designers and developers, my interested in web
              development increased further - I started learning more and more
              in my free time after work and at some point I decided to change
              my career and pursue my passion - making great web experiences,
              this time as a developer. Currently I’m in Berlin, Germany, where
              I joined a coding bootcamp and I’m looking for new job
              opportunities.
            </p>
            <Button to="/">View CV</Button>
          </Box>
          <Box px={16} order={[-1, -1, -1, 1]} width={[1, 1, 1, 1 / 2]}>
            <Image fluid={data.aboutImage.childImageSharp.fluid} />
          </Box>
        </Flex>
      </Container>
    </Box>
  </Layout>
);

export const pageQuery = graphql`
  query {
    aboutImage: file(relativePath: { regex: "/thai_wake_park/" }) {
      childImageSharp {
        fluid(maxWidth: 564, maxHeight: 564) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
