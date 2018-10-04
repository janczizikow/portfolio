import React from 'react';
import { css } from 'react-emotion';
import { Github, Codepen, Linkedin } from 'react-feather';
import { Box, Flex } from '../UI';

const footerLinkStyles = css`
  padding: 0 15px;
  color: inherit;
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 0.7;
    transition: opacity 0.2s;
  }
`;

const Footer = () => (
  <Box is="footer" py={58} bg="bgAlt" color="white">
    <Flex alignItems="center" justifyContent="center">
      <a href="https://github.com/janczizikow/" className={footerLinkStyles}>
        <Github />
      </a>
      <a href="/about/" className={footerLinkStyles}>
        <Codepen />
      </a>
      <a
        href="https://www.linkedin.com/in/janczizikow/"
        className={footerLinkStyles}
      >
        <Linkedin />
      </a>
    </Flex>
  </Box>
);

export default Footer;
