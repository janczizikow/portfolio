import React, { type Node } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import { Box, Flex } from '../components/UI';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import theme from '../utils/theme';

injectGlobal(`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  .headroom--scrolled {
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.08);
  }

  .lock-scroll {
    overflow: hidden;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:hover,
  select:-webkit-autofill,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:hover,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:hover {
    border: 0;
    border-bottom: 2px solid ${theme.colors.grey};
    -webkit-text-fill-color: ${theme.colors.dark};
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`);

const Layout = ({ children }: { children: Node }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
