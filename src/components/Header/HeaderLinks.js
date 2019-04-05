import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FiMoon, FiSun } from 'react-icons/fi';
import HeaderLink from './HeaderLink';
import { Box, Flex, IconButton } from '../UI';
import ThemeContext from '../../context/ThemeContext';

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
  const { activeTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex css={{ height: '100%' }}>
      <HeaderLinksNav is="nav">
        {links &&
          links.map(link => (
            <HeaderLink key={link.text} to={link.to}>
              {link.text}
            </HeaderLink>
          ))}
      </HeaderLinksNav>
      <IconButton color="headingColor" pl={3} onClick={toggleTheme}>
        {activeTheme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
      </IconButton>
    </Flex>
  );
};

HeaderLinks.propTypes = propTypes;

export default HeaderLinks;
