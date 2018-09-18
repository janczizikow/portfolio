import system from 'system-components/emotion';
import Box from './Box';

const Flex = system(
  {
    is: Box,
  },
  {
    display: 'flex',
  },
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent'
);

Flex.displayName = 'Flex';

export default Flex;
