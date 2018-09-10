// @flow
import React from 'react';
import styled from 'react-emotion';
import { Box } from '@rebass/grid/emotion';

import Layout from 'layout';
import Container from 'components/container';
// import ErrorIllustration from 'assets/images/404.svg';

const Section = styled(Box)`
  background-color: #f4f6fb;
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <Section py="3rem">
      <Container>
        {/* <ErrorIllustration /> */}
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn&apos;t seem to exist…</p>
      </Container>
    </Section>
  </Layout>
);

export default NotFoundPage;
