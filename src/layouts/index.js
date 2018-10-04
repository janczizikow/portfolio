import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import Global from './injectGlobal';
import { Box, Flex } from '../components/UI';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';

const propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
};

const Layout = ({ children, theme }) => (
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
            <Flex flexDirection="column" css="min-height: 100vh;">
              <Header
                links={[
                  { to: '/', text: 'Projects' },
                  { to: '/about', text: 'About' },
                  { to: '/contact', text: 'Contact' },
                ]}
              />
              <MobileMenu
                links={[
                  { to: '/', text: 'Projects' },
                  { to: '/about', text: 'About' },
                  { to: '/contact', text: 'Contact' },
                ]}
              />
              <Box is="main" flex={1}>
                {children}
              </Box>
              <Footer />
            </Flex>
          </Global>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = propTypes;

const mapStateToProps = state => ({
  theme: state.ui.theme,
});

export default connect(mapStateToProps)(Layout);
