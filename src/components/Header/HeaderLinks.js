import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FiMoon, FiSun } from 'react-icons/fi';
import HeaderLink from './HeaderLink';
import { Box, Flex, IconButton } from '../UI';
import { useTheme } from '../../context/ThemeContext';

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

const HeaderLinksNav = styled(Box)`
  display: none;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const HeaderLinks = ({ links }) => {
  const {
    initalized,
    theme: { mode },
    toggleColorMode,
  } = useTheme();

  return (
    <Flex css={{ height: '100%' }}>
      <HeaderLinksNav as="nav">
        {links &&
          links.map(link => (
            <HeaderLink key={link.text} to={link.to}>
              {link.text}
            </HeaderLink>
          ))}
      </HeaderLinksNav>
      {initalized ? (
        <IconButton
          aria-label="Toggle dark theme"
          color="headingColor"
          pl={3}
          onClick={toggleColorMode}
        >
          {mode === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
        </IconButton>
      ) : (
        <Box pl={3} width={40} height="100%" />
      )}
    </Flex>
  );
};

HeaderLinks.propTypes = propTypes;

export default HeaderLinks;
