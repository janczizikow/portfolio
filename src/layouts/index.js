import React, { useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import Global from '../components/Global';
import ThemeContext from '../context/ThemeContext';
import { Box, Flex } from '../components/UI';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const links = [
  { to: '/', text: 'Projects' },
  { to: '/about/', text: 'About' },
  { to: '/contact/', text: 'Contact' },
];

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Flex flexDirection="column" minHeight="100vh">
        <Header openMobileMenu={openMobileMenu} links={links} />
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          closeMobileMenu={closeMobileMenu}
          links={links}
        />
        <Box as="main" css={{ flex: 1 }}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

Layout.propTypes = propTypes;

export default Layout;
