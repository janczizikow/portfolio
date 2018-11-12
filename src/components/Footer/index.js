// @flow
import React from 'react';
import { Github, Codepen, Linkedin } from 'react-feather';
import { Box, Flex } from '../UI';
import FooterLink from './FooterLink';

const Footer = () => (
  <Box is="footer" py={58} bg="bgAlt" color="white">
    <Flex alignItems="center" justifyContent="center">
      <FooterLink href="https://github.com/janczizikow/">
        <Github />
      </FooterLink>
      <FooterLink href="/about/">
        <Codepen />
      </FooterLink>
      <FooterLink href="https://www.linkedin.com/in/janczizikow/">
        <Linkedin />
      </FooterLink>
    </Flex>
  </Box>
);

export default Footer;
