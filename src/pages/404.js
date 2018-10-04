import React from 'react';
import { Box, Container, Button } from '../components/UI';
// import ErrorIllustration from '../assets/images/404.svg';
// import styled from 'react-emotion';

// console.log(ErrorIllustration);
const NotFoundPage = () => (
  <Box flex={1} height="100vh" bg="#f4f6fb" textAlign="center" py={5}>
    <Container>
      {/* <ErrorIllustration /> */}
      <h1>Page Not Found</h1>
      <p>The page you are looking for doesn&apos;t seem to exist…</p>
      <Button to="/">Go home</Button>
    </Container>
  </Box>
);

export default NotFoundPage;
