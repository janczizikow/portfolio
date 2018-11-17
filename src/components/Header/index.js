// @flow
import React, { Component } from 'react';
import Headroom from 'react-headroom';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { Link } from 'gatsby';
import { Container, Flex } from '../UI';
import Logo from '../../assets/images/logo.svg';
import HeaderToggle from './HeaderToggle';
import HeaderLinks from './HeaderLinks';
import type { Theme } from '../../utils/types';

type HeaderProps = {
  links?: {
    to: string,
    text: string,
  }[],
  openMobileMenu: () => mixed,
  theme: Theme,
};

type HeaderState = {
  headroomActive: boolean,
};

const HeaderInner = styled(Flex)`
  width: 100%;
  height: ${p => p.theme.headerHeight};
`;

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${p => p.theme.colors.headingColor};
`;

class Header extends Component<HeaderProps, HeaderState> {
  state = {
    headroomActive: false,
  };

  windowWidth = 0;

  getWindowWidth = () => {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 992) {
      this.setState({
        headroomActive: false,
      });
    } else {
      this.setState({
        headroomActive: true,
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
    const { links, openMobileMenu, theme } = this.props;
    const { headroomActive } = this.state;

    return (
      <Headroom
        disable={!headroomActive}
        pinStart={500}
        downTolerance={5}
        wrapperStyle={{
          width: '100%',
          height: 58,
          minHeight: 58,
        }}
        style={{
          position: 'fixed',
          height: 58,
          backgroundColor: theme.colors.bgHeader,
          WebkitTransition: 'transform 0.3s ease',
          MozTransition: 'transform 0.3s ease',
          OTransition: 'transform 0.3s ease',
          transition: 'transform 0.3s ease',
          zIndex: 10,
        }}
        itemScope
        itemType="http://schema.org/SiteNavigationElement"
      >
        <Container fluid>
          <HeaderInner alignItems="center" justifyContent="space-between">
            <HeaderLink to="/">
              <Logo />
            </HeaderLink>
            <HeaderToggle onClick={openMobileMenu} />
            <HeaderLinks links={links} />
          </HeaderInner>
        </Container>
      </Headroom>
    );
  }
}

export default withTheme(Header);
