import React from 'react';
import { css } from 'react-emotion';
import { Box, Flex, Icon } from '../UI';

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
  <Box is="footer" py={58} bg="dark" color="white">
    <Flex alignItems="center" justifyContent="center">
      <a href="https://github.com/janczizikow/" className={footerLinkStyles}>
        {Icon('github', ['24', '24'])}
      </a>
      <a href="/about/" className={footerLinkStyles}>
        {Icon('codepen', ['24', '24'])}
      </a>
      <a
        href="https://www.linkedin.com/in/janczizikow/"
        className={footerLinkStyles}
      >
        {Icon('linkedin', ['24', '24'])}
      </a>
    </Flex>
  </Box>
);

export default Footer;
