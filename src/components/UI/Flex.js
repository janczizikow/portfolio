import styled from '@emotion/styled';
import {
  display,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';
import Box from './Box';

const Flex = styled(Box)`
  ${display}
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
Flex.defaultProps = {
  display: 'flex',
};
Flex.displayName = 'Flex';

export default Flex;
