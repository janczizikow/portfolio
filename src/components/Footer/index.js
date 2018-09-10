// @flow
import React from 'react';
import styled, { css } from 'react-emotion';
import { Box, Flex } from '@rebass/grid/emotion';

import icon from 'components/icon';

const FooterStyles = styled('footer')`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.dark};
`;

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

export default () => {
  return (
    <FooterStyles>
      <Box py={58}>
        <Flex alignItems="center" justifyContent="center">
          <a href="/about/" className={footerLinkStyles}>
            {icon('github', ['24', '24'])}
          </a>
          <a href="/about/" className={footerLinkStyles}>
            {icon('codepen', ['24', '24'])}
          </a>
          <a href="/about/" className={footerLinkStyles}>
            {icon('linkedin', ['24', '24'])}
          </a>
        </Flex>
      </Box>
    </FooterStyles>
  );
};
