// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Moon, Sun } from 'react-feather';
import * as actions from '../../store/actions';
import type { State, Dispatch } from '../../utils/types';
import { Box, IconButton } from '../UI';
import HeaderLink from './HeaderLink';

type HeaderLinksProps = {
  activeTheme: 'light' | 'dark',
  switchTheme: () => any,
  links?: {
    to: string,
    text: string,
  }[],
};

const HeaderLinksNav = styled(Box)`
  display: none;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const HeaderLinks = (props: HeaderLinksProps) => {
  const { activeTheme, switchTheme, links } = props;
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

const mapStateToProps = (state: State) => ({
  activeTheme: state.ui.theme.activeTheme,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  switchTheme: () => dispatch(actions.switchTheme()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLinks);
