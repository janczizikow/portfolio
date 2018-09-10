// @flow
/* eslint-disable */
import React, { Component } from 'react';
import Headroom from 'react-headroom';
import { cx, css } from 'react-emotion';
import { Flex } from '@rebass/grid/emotion';
import { Link } from 'gatsby';

import Container from 'components/Container';
import Logo from 'assets/images/logo.svg';

const headerInnerStyles = css`
  width: 100%;
  height: 3.625rem;
`;

const headerFixedStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const headerLinkStyles = css`
  display: flex;
  align-items: center;
  height: 100%;
`;

const linkEffectsStyles = css`
  padding: 0 0.9375rem;
  transition: color 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: black;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const linkEffectsUnderlineStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 17px;
    width: 0;
    height: 2px;
    height: 0.125rem;
    background-color: #277cea;
    transition: width 0.24s ease-in-out;
  }

  &:hover::before {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

const activeLinkStyles = css`
  &:hover::before {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

class Header extends Component {
  state = {
    headroomActive: false,
    stylesOverride: null,
  };

  windowWidth = 0;

  getWindowWidth = () => {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 992) {
      this.setState({
        headroomActive: false,
        stylesOverride: null,
      });
    } else {
      this.setState({
        headroomActive: true,
        stylesOverride: null,
      });
    }
  };

  componentDidMount = () => {
    if (window.innerWidth > 992) {
      this.getWindowWidth();
    }
    window.addEventListener('resize', this.getWindowWidth);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.getWindowWidth);
  };

  render() {
    return (
      <Headroom
        disable={!this.state.headroomActive}
        pinStart={500}
        wrapperStyle={{
          width: '100%',
        }}
        className={!this.state.headroomActive && headerFixedStyles}
        style={{
          backgroundColor: '#fff',
          transition: 'all 0.3s ease',
        }}
      >
        <Container>
          <Flex
            className={headerInnerStyles}
            alignItems="center"
            justifyContent="space-between"
          >
            <Link
              className={headerLinkStyles}
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Logo />
            </Link>
            <Flex tag="nav" className={headerLinkStyles}>
              <Link
                to="/about"
                activeClassName={activeLinkStyles}
                className={cx(headerLinkStyles, linkEffectsStyles)}
              >
                <span className={linkEffectsUnderlineStyles}>About</span>
              </Link>
              <Link
                to="/contact"
                activeClassName={activeLinkStyles}
                className={cx(headerLinkStyles, linkEffectsStyles)}
              >
                <span className={linkEffectsUnderlineStyles}>Contact</span>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Headroom>
    );
  }
}

export default Header;
