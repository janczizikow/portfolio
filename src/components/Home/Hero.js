import React from 'react';
import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FiChevronDown } from 'react-icons/fi';
import { Box, Container, Row, Col, Heading, Text } from '../UI';
import HeroImg from '../../assets/illustrations/illustration.svg';
import presets from '../../utils/presets';
import { grid } from '../../utils/themes';

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

  ${presets.lg} {
    margin-top: ${p => p.theme.space[4]}px;
    display: block;
    opacity: 0.65;
    animation: ${scrollDownAnimation} 2s ease infinite;
  }
`;

const ColMd = styled(Col)`
  display: none;

  ${presets.lg} {
    display: block;
  }
`;

const Hero = () => (
  <Box py={4}>
    <Container>
      <Row alignItems="center" flexWrap="wrap">
        <Col width={[1, null, null, 1 / 2]}>
          <Heading as="h1" fontSize="2rem">
            Just a simple dude who wants to build cool stuff.
          </Heading>
          <Text>
            Software developer based in Berlin, specializing in building
            applications with React, React-Native, and TypeScript.
          </Text>
          <ScrollDownLink href="#projects" aria-label="Projects">
            <ScrollDown>
              <FiChevronDown size={24} />
            </ScrollDown>
          </ScrollDownLink>
        </Col>
        <ColMd width={[1, null, null, 1 / 2]}>
          <picture>
            <source
              media={`(max-width: ${parseInt(grid.breakpoints[2], 10) - 1}px)`}
              sizes="1px"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
            />
            <source
              media={`(min-width: ${grid.breakpoints[2]})`}
              srcSet={HeroImg}
            />
            <img src={HeroImg} alt="illustration" css={{ minHeight: 453 }} />
          </picture>
        </ColMd>
      </Row>
    </Container>
  </Box>
);

export default Hero;
