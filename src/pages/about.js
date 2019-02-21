import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import SEO from '../components/SEO';
import {
  Box,
  Container,
  Row,
  Col,
  Heading,
  Text,
  Emoji,
  Button,
} from '../components/UI';

const propTypes = {
  data: PropTypes.instanceOf(Object),
};

const About = ({
  data: {
    aboutImage: {
      childImageSharp: { fluid: aboutImg },
    },
  },
}) => (
  <Box py={4}>
    <SEO title="About" />
    <Container>
      <Row alignItems="center" flexWrap="wrap">
        <Col flex={['0 0 100%', null, null, '0 0 50%']}>
          <Heading mt={[4, null, null, 0]}>
            Hey, nice to meet you! <Emoji label="waving-hand">👋</Emoji>
          </Heading>
          <Text>
            I’m Jan, 26 year old web developer from Poland. I’m that guy on the
            picture enjoying Thai Wake Park and trying to wakeboard for the
            first time - it was a blast! Anyways, back to serious stuff, during
            my business studies at college I got interested in building
            websites. After graduating I worked for roughly a year as a UX
            Project Manager in an e-commerce company. As my job involved working
            with UX designers and developers, my interested in web development
            increased further - I started learning more and more in my free time
            after work and at some point I decided to change my career and
            pursue my passion - making great web experiences, this time as a
            developer. Currently I’m in Berlin, Germany, where I joined a coding
            bootcamp and I’m looking for new job opportunities.
          </Text>
          <Button rounded href="/CV.pdf">
            View CV
          </Button>
        </Col>
        <Col
          order={[-1, null, null, 1]}
          flex={['0 0 100%', null, null, '0 0 50%']}
        >
          <Image fluid={aboutImg} />
        </Col>
      </Row>
    </Container>
  </Box>
);

About.propTypes = propTypes;

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

export default About;
