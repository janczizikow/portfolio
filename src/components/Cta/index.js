// @flow
import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';
import styled from 'react-emotion';
import { Box } from '@rebass/grid/emotion';

const Cta = styled(Box)`
  text-align: center;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
`;

export default () => {
  return (
    <Cta py={48}>
      <Container>
        <h2>Hiring a web developer?</h2>
        <Link to="/contact">Let&apos;s Talk</Link>
      </Container>
    </Cta>
  );
};
