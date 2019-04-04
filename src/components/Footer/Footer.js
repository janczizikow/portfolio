import React from 'react';
import { FiGithub, FiCodepen, FiLinkedin } from 'react-icons/fi';

import Box from '../UI/Box';
import Flex from '../UI/Flex';
import FooterLink from './FooterLink';

const Footer = React.memo(() => (
  <Box is="footer" py={58} bg="bgAlt" color="white">
    <Flex alignItems="center" justifyContent="center">
      <FooterLink
        href="https://github.com/janczizikow/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github"
      >
        <FiGithub size={24} />
      </FooterLink>
      <FooterLink
        href="https://codepen.io/hollow3d/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Codepen"
      >
        <FiCodepen size={24} />
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/janczizikow/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FiLinkedin size={24} />
      </FooterLink>
    </Flex>
  </Box>
));

export default Footer;
