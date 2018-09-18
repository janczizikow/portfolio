import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import { css } from 'emotion';
import styled from 'react-emotion';
import Transition from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import * as actionTypes from '../../store/actions/actionTypes';
import { Box, Flex, Container } from '../UI';
import MobileMenuClose from './MobileMenuClose';
import MobileMenuLink from './MobileMenuLink';
import Logo from '../../assets/images/logo.svg';

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: ${p => p.theme.colors.dark};
  z-index: 19999;
`;

const MenuTop = styled(Flex)`
  height: ${p => p.theme.headerHeight};
`;

const MenuLinks = styled(Flex)`
  width: 100%;
  height: calc(100vh - ${p => p.theme.headerHeight});
`;

const transitionSpeed = 200;

const transitionStyles = {
  entering: { opacity: 0, transform: 'scale(0.98)' },
  entered: { opacity: 1, transform: 'scale(1)' },
};

const linkTransitionStyles = {
  entering: { opacity: 0, transform: 'translateY(-24px)' },
  entered: { opacity: 0.6, transform: 'translateY(0)' },
};

const MobileMenu = ({ isMobileMenuOpen, closeMobileMenu, links }) => {
  return (
    <Transition
      in={isMobileMenuOpen}
      timeout={transitionSpeed}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <Menu
          style={{
            WebkitTransition: `opacity ${transitionSpeed}ms ease-out, transform ${transitionSpeed}ms ease-out`,
            transition: `opacity ${transitionSpeed}ms ease-out, transform ${transitionSpeed}ms ease-out`,
            opacity: 0,
            ...transitionStyles[state],
          }}
        >
          <Container fluid>
            <MenuTop
              alignItems="center"
              justifyContent="space-between"
              color="white"
            >
              <Link style={{ color: '#fff' }} to="/">
                <Logo />
              </Link>
              <MobileMenuClose onClick={closeMobileMenu} />
            </MenuTop>
            <MenuLinks alignItems="center" width="100%">
              <TransitionGroup component={Box} is="nav" m="auto" width="100%">
                {/* eslint-disable no-shadow */}
                {links.map((link, i) => (
                  <Transition
                    appear
                    timeout={50 + 70 * (i + 1)}
                    in={isMobileMenuOpen}
                    key={link.text}
                  >
                    {state => (
                      <MobileMenuLink
                        style={{
                          opacity: 0,
                          transform: 'translateY(-24px)',
                          transitionDelay: `${0.05 + 0.07 * (i + 1)}s`,
                          transition: 'opacity .5s ease, transform 0.5s ease',
                          ...linkTransitionStyles[state],
                        }}
                        onClick={closeMobileMenu}
                        activeClassName={css`
                          opacity: 1;
                        `}
                        to={link.to}
                      >
                        {link.text}
                      </MobileMenuLink>
                    )}
                  </Transition>
                ))}
              </TransitionGroup>
            </MenuLinks>
          </Container>
        </Menu>
      )}
    </Transition>
  );
};

const mapStateToProps = state => ({
  isMobileMenuOpen: state.ui.isMobileMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  closeMobileMenu: () => dispatch({ type: actionTypes.CLOSE_MOBILE_MENU }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu);
