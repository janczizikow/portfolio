import React from 'react';
import styled, { keyframes } from 'react-emotion';
import { Box } from '@rebass/grid/emotion';

import icon from 'components/icon';
import Row from 'components/Row';
import Container from 'components/Container';

import HeroImg from '../../assets/illustrations/illustration.svg';

const Section = styled(Box)`
  margin-top: ${p => p.theme.headerHeight};

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-top: 0;
  }
`;

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

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    display: block;
    opacity: 0.65;
    animation: ${scrollDownAnimation} 2s ease infinite;
  }
`;

const ColMd = styled(Box)`
  display: none;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: block;
  }
`;

export default () => {
  return (
    <Section py="3rem">
      <Container>
        <Row alignItems="center" flexWrap="wrap">
          <Box px={16} flex="1 1 auto" width={[1, 1, 1, 1 / 2]}>
            <h1>Just a simple dude who wants to build cool stuff.</h1>
            <p>
              Previously UX Project manger at Motion Global - an e-commerce
              retailer of eyewear and contact lenses. Now, a self-starting web
              developer seeking to launch a career building web applications and
              services. Familiar with development and deployment processes for
              many web-based technologies.
            </p>
            <ScrollDown>{icon('chevron-down', ['24', '24'])}</ScrollDown>
          </Box>
          <ColMd px={16} flex="1 1 auto" width={[1, 1, 1, 1 / 2]}>
            <img src={HeroImg} alt="illustration" />
          </ColMd>
        </Row>
      </Container>
    </Section>
  );
};
