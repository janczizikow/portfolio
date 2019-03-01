import styled from '@emotion/styled';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';
import Box from './Box';

const Flex = styled(Box)`
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
};
Flex.displayName = 'Flex';

export default Flex;
