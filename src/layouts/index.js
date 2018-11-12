// @flow
import React, { type Node } from 'react';
// import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import Global from './injectGlobal';
import ErrorBoundry from '../components/ErrorBoundry';
import * as actions from '../store/actions';
import { Box, Flex } from '../components/UI';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import type { Theme, State, Dispatch } from '../utils/types';

type Props = {
  children: Node,
  theme: Theme,
  isMobileMenuOpen: boolean,
  openMobileMenu: () => mixed,
  closeMobileMenu: () => mixed,
};

const links = [
  { to: '/', text: 'Projects' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' },
];

const Layout = ({
  children,
  theme,
  isMobileMenuOpen,
  openMobileMenu,
  closeMobileMenu,
}: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content:
                'web developer portfolio, web developer, fullstack developer',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <Global>
            <ErrorBoundry>
              <Flex flexDirection="column" css="min-height: 100vh;">
                <Header openMobileMenu={openMobileMenu} links={links} />
                <MobileMenu
                  isMobileMenuOpen={isMobileMenuOpen}
                  closeMobileMenu={closeMobileMenu}
                  links={links}
                />
                <Box is="main" flex={1}>
                  {children}
                </Box>
                <Footer />
              </Flex>
            </ErrorBoundry>
          </Global>
        </ThemeProvider>
      </>
    )}
  />
);

const mapStateToProps = (state: State) => ({
  theme: state.ui.theme,
  isMobileMenuOpen: state.ui.isMobileMenuOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openMobileMenu: () => dispatch(actions.openMobileMenu()),
  closeMobileMenu: () => dispatch(actions.closeMobileMenu()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
