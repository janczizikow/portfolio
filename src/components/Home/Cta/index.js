import React from 'react';
import { Box, Container, Heading, Button } from '../../UI';

const Cta = () => {
  return (
    <Box textAlign="center" bg="primary" py={5}>
      <Container>
        <Heading color="white">Hiring a web developer?</Heading>
        <Button color="success" to="/contact">
          Let&apos;s Talk
        </Button>
      </Container>
    </Box>
  );
};

export default Cta;
