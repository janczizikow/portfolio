import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import posed, { PoseGroup } from 'react-pose';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { Flex, Container } from '../UI';
import MobileMenuClose from './MobileMenuClose';
import MobileMenuLink from './MobileMenuLink';
import Logo from '../../assets/images/logo.svg';

const propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  closeMobileMenu: PropTypes.func,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

const Menu = posed.div({
  enter: { postion: 'fixed', opacity: 1, transform: 'scale(1)' },
  exit: { postion: 'fixed', opacity: 0, transform: 'scale(0.98)' },
});

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.bgAlt};
  overflow-y: auto;
  z-index: 999;
`;

const MenuTop = styled(Flex)`
  height: ${p => p.theme.headerHeight};
`;

const MenuLinks = styled(Flex)`
  width: 100%;
  height: calc(100vh - ${p => p.theme.headerHeight});
  background-color: ${p => p.theme.colors.bgAlt};
  overflow: auto;
`;

const LinkTransitionContainer = posed.nav({
  enter: { staggerChildren: 70, delay: 250, delayChildren: 250 },
});

const LinkTransition = posed.div({
  enter: { y: 24, opacity: 1 },
  exit: { y: 0, opacity: 0 },
});

const Box = styled(LinkTransitionContainer)`
  margin: auto;
  width: 100%;
`;

class MobileMenu extends React.Component {
  menuRef = React.createRef();

  shouldComponentUpdate(nextProps) {
    const { isMobileMenuOpen } = this.props;
    return isMobileMenuOpen !== nextProps.isMobileMenuOpen;
  }

  componentDidUpdate() {
    const { isMobileMenuOpen } = this.props;

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', this.handleKeyDown);
      disableBodyScroll(this.menuRef.current);
    } else {
      document.removeEventListener('keydown', this.handleKeyDown);
      enableBodyScroll(this.menuRef.current);
    }
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  handleKeyDown = e => {
    const { closeMobileMenu } = this.props;

    if (e.keyCode === 27) {
      closeMobileMenu();
    }
  };

  render() {
    const { isMobileMenuOpen, closeMobileMenu, links } = this.props;
    return (
      <PoseGroup flipMove={false}>
        {isMobileMenuOpen && (
          <StyledMenu key="mobileMenu" ref={this.menuRef} pose>
            <Container fluid>
              <MenuTop
                alignItems="center"
                justifyContent="space-between"
                color="white"
              >
                <Link onClick={closeMobileMenu} css={{ color: '#fff' }} to="/">
                  <Logo />
                </Link>
                <MobileMenuClose onClick={closeMobileMenu} />
              </MenuTop>
            </Container>
            <MenuLinks alignItems="center" width="100%">
              <Box>
                {links.map(link => (
                  <LinkTransition
                    key={link.text}
                    style={{ opacity: 0, transform: 'translateY(-24px)' }}
                  >
                    <MobileMenuLink
                      onClick={closeMobileMenu}
                      activeStyle={{ opacity: 1 }}
                      to={link.to}
                    >
                      {link.text}
                    </MobileMenuLink>
                  </LinkTransition>
                ))}
              </Box>
            </MenuLinks>
          </StyledMenu>
        )}
      </PoseGroup>
    );
  }
}

MobileMenu.propTypes = propTypes;

export default MobileMenu;
