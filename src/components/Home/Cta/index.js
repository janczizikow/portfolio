import React from 'react';
import { Box, Container, Heading, Button } from '../../UI';

const Cta = () => (
  <Box textAlign="center" bg="primary" py={5}>
    <Container>
      <Heading color="#fff">Hiring a web developer?</Heading>
      <Button color="success" rounded to="/contact">
        Let&apos;s Talk
      </Button>
    </Container>
  </Box>
);

export default Cta;
