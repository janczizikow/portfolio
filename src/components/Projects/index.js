import React from 'react';
import Container from 'components/Container';
import styled from 'react-emotion';
import { Box } from '@rebass/grid/emotion';

const Background = styled(Box)`
  background-color: ${p => p.theme.colors.lightGrey};
`;

export default () => {
  return (
    <Background py="3rem">
      <Container>
        <h2>Projects</h2>
      </Container>
    </Background>
  );
};
