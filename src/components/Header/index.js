import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'react-emotion';
import { withTheme } from 'emotion-theming';
import { Link } from 'gatsby';
import * as actions from '../../store/actions';
import { Container, Flex } from '../UI';
import Logo from '../../assets/images/logo.svg';
import HeaderToggle from './HeaderToggle';
import HeaderLinks from './HeaderLinks';

const propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  openMobileMenu: PropTypes.func,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      bgHeader: PropTypes.string,
    }),
  }),
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

class Header extends Component {
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
        wrapperStyle={{
          width: '100%',
          height: '58px',
        }}
        style={{
          position: 'fixed',
          backgroundColor: theme.colors.bgHeader,
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

Header.propTypes = propTypes;

const mapDispatchToProps = dispatch => ({
  openMobileMenu: () => dispatch(actions.openMobileMenu()),
});

export default connect(
  null,
  mapDispatchToProps
)(withTheme(Header));
