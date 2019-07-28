import React from 'react';
import { Box, Container, Heading, Button } from '../../UI';

const Cta = () => (
  <Box py={5} bg="primary" textAlign="center">
    <Container>
      <Heading color="#fff">Hiring a web developer?</Heading>
      <Button color="success" rounded to="/contact/">
        Let&apos;s Talk
      </Button>
    </Container>
  </Box>
);

export default Cta;
