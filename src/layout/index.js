// @flow
import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
import { css } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { Box, Flex } from '@rebass/grid/emotion';

import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import theme from 'utils/theme';

injectGlobal(`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
`);

const siteStyles = css`
  min-height: 100vh;
`;

// const siteContentStyles = css`
//   margin-top: 3.625rem;
// `;

const Layout = ({ children }: { children: React.Node }) => (
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
          <Flex flexDirection="column" className={siteStyles}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Box tag="main" flex={1}>
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
