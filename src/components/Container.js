// @ flow
import styled from 'react-emotion';
import { Box } from '@rebass/grid/emotion';

const Container = styled(Box)`
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;

  @media only screen and (min-width: ${p => p.theme.breakpoints[0]}) {
    max-width: 540px;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 720px;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    max-width: 960px;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    max-width: 1200px;
  }
`;

// const Container = props => (
//   <Box
//     {...props}
//     px={16}
//     mx="auto"
//     css={{
//       maxWidth: '1200px',
//     }}
//   />
// );

export default Container;
