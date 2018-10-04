import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Moon, Sun } from 'react-feather';
import * as actions from '../../store/actions';
import { Box, IconButton } from '../UI';
import HeaderLink from './HeaderLink';

const propTypes = {
  activeTheme: PropTypes.string,
  switchTheme: PropTypes.func,
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

const HeaderLinks = ({ activeTheme, switchTheme, links }) => {
  let headerLinks = null;

  if (links) {
    headerLinks = links.map(link => (
      <HeaderLink key={link.text} to={link.to}>
        {link.text}
      </HeaderLink>
    ));
  }

  return (
    <HeaderLinksNav is="nav">
      {headerLinks}
      <IconButton color="headingColor" pl={3} onClick={switchTheme}>
        {activeTheme === 'light' ? <Moon /> : <Sun />}
      </IconButton>
    </HeaderLinksNav>
  );
};

HeaderLinks.propTypes = propTypes;

const mapStateToProps = state => ({
  activeTheme: state.ui.theme.activeTheme,
});

const mapDispatchToProps = dispatch => ({
  switchTheme: () => dispatch(actions.switchTheme()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLinks);
