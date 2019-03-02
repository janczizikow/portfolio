import React from 'react';
import styled from '@emotion/styled';
import SEO from '../components/SEO';
import { Box, Container, Heading, Text, Button } from '../components/UI';
import ErrorIllustration from '../assets/illustrations/404.svg';

const ErrorImg = styled.img`
  margin-bottom: 0;
  margin-left: 30px;
`;

const NotFoundPage = () => (
  <Box bg="#f4f6fb" textAlign="center" py={5}>
    <SEO title="Page not found" />
    <Container>
      <ErrorImg src={ErrorIllustration} alt="404" />
      <Heading color="dark" is="h1" mt={-5}>
        Page Not Found
      </Heading>
      <Text color="greyLight" css={{ width: '280px' }} my={3} mx="auto">
        The page you are looking for doesn&apos;t seem to exist…
      </Text>
      <Button to="/">Go home</Button>
    </Container>
  </Box>
);

export default NotFoundPage;
