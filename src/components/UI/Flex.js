import styled from '@emotion/styled';
import { flexbox } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import Box from './Box';

const Flex = styled(Box)`
  ${flexbox}
`;

Flex.propTypes = {
  ...propTypes.flexbox,
};
Flex.defaultProps = {
  display: 'flex',
};
Flex.displayName = 'Flex';

export default Flex;
