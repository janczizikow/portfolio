import React, { Component } from 'react';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import * as actionTypes from '../../store/actions/actionTypes';
import { Container, Flex } from '../UI';
import Logo from '../../assets/images/logo.svg';
import HeaderToggle from './HeaderToggle';
import HeaderLinks from './HeaderLinks';

type Props = {
  links?: {
    to: string,
    text: string,
  }[],
};

type State = {
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
  color: ${p => p.theme.colors.dark};
`;

class Header extends Component<Props, State> {
  state = {
    headroomActive: false,
  };

  windowWidth: number = 0;

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
    const { links, openMobileMenu } = this.props;
    const { headroomActive } = this.state;

    return (
      <Headroom
        disable={!headroomActive}
        pinStart={500}
        wrapperStyle={{
          width: '100%',
        }}
        style={{
          position: 'fixed',
          backgroundColor: 'hsla(0,0%,100%,.96)',
          WebkitTransition: 'all 0.3s ease',
          MozTransition: 'all 0.3s ease',
          OTransition: 'all 0.3s ease',
          transition: 'all 0.3s ease',
          zIndex: 10,
        }}
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

const mapDispatchToProps = dispatch => ({
  openMobileMenu: () => dispatch({ type: actionTypes.OPEN_MOBILE_MENU }),
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
