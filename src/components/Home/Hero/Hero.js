import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FiChevronDown } from 'react-icons/fi';
import { Box, Container, Row, Col, Heading, Text } from '../../UI';
import HeroImg from '../../../assets/illustrations/illustration.svg';

const scrollDownAnimation = keyframes`
  0% { transform: translateY(-16px) }
  50% { transform: translateY(0) }
  100% { transform: translateY(-16px) }
`;

const ScrollDownLink = styled(AnchorLink)`
  position: absolute;
  width: 24px;
  height: 58px;
  color: ${p => p.theme.colors.textColor};
`;

const ScrollDown = styled('div')`
  display: none;

  @media (min-width: ${p => p.theme.grid.breakpoints[2]}) {
    margin-top: ${p => p.theme.space[4]}px;
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

const Hero = () => (
  <Box py={4}>
    <Container>
      <Row alignItems="center" flexWrap="wrap">
        <Col flex={['0 0 100%', null, null, '0 0 50%']}>
          <Heading is="h1" fontSize="2rem">
            Just a simple dude who wants to build cool stuff.
          </Heading>
          <Text>
            Previously UX Project manger at Motion Global - an e-commerce
            retailer of eyewear and contact lenses. Now, a self-starting web
            developer seeking to launch a career building web applications and
            services. Familiar with development and deployment processes for
            many web-based technologies.
          </Text>
          <ScrollDownLink href="#projects" aria-label="Projects">
            <ScrollDown>
              <FiChevronDown size={24} />
            </ScrollDown>
          </ScrollDownLink>
        </Col>
        <ColMd flex={['0 0 100%', null, null, '0 0 50%']}>
          <img src={HeroImg} alt="illustration" css={{ minHeight: 453 }} />
        </ColMd>
      </Row>
    </Container>
  </Box>
);

export default Hero;
