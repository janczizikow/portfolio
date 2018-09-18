import React from 'react';
import Layout from '../layout';
import { Box, Container, Button } from '../components/UI';
// import ErrorIllustration from '../assets/images/404.svg';
// import styled from 'react-emotion';
// const Section = styled(Box)`
//   background-color: #f4f6fb;
//   text-align: center;
// `;

const NotFoundPage = () => (
  <Layout>
    <Box bg="lightGrey" textAlign="center" py={4}>
      <Container>
        {/* <ErrorIllustration /> */}
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn&apos;t seem to exist…</p>
        <Button to="/">Go home</Button>
      </Container>
    </Box>
  </Layout>
);

export default NotFoundPage;
