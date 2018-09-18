import React from 'react';
import styled, { keyframes } from 'react-emotion';
import { Box, Container, Row, Col, Heading, Text, Icon } from '../../UI';

import HeroImg from '../../../assets/illustrations/illustration.svg';

const scrollDownAnimation = keyframes`
  0% {
    transform: translateY(-16px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-16px);
  }
`;

const ScrollDown = styled('div')`
  display: none;

  @media (min-width: ${p => p.theme.grid.breakpoints[2]}) {
    display: block;
    opacity: 0.65;
    animation: ${scrollDownAnimation} 2s ease infinite;
  }
`;

const ColMd = styled(Col)`
  display: none;

  @media (min-width: ${p => p.theme.grid.breakpoints[2]}) {
    display: block;
  }
`;

const Hero = () => {
  return (
    <Box py={4}>
      <Container>
        <Row alignItems="center" flexWrap="wrap">
          <Col flex={['0 0 100%', '0 0 100%', '0 0 100%', '0 0 50%']}>
            <Heading as="h1" fontSize="2rem">
              Just a simple dude who wants to build cool stuff.
            </Heading>
            <Text>
              Previously UX Project manger at Motion Global - an e-commerce
              retailer of eyewear and contact lenses. Now, a self-starting web
              developer seeking to launch a career building web applications and
              services. Familiar with development and deployment processes for
              many web-based technologies.
            </Text>
            <ScrollDown>{Icon('chevron-down', ['24', '24'])}</ScrollDown>
          </Col>
          <ColMd flex={['0 0 100%', '0 0 100%', '0 0 100%', '0 0 50%']}>
            <img src={HeroImg} alt="illustration" />
          </ColMd>
        </Row>
      </Container>
    </Box>
  );
};

export default Hero;
