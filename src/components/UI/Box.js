import styled from '@emotion/styled';
import { layout, space, color } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import shouldForwardProp from '@styled-system/should-forward-prop';

const Box = styled('div', { shouldForwardProp })`
  ${layout}
  ${space}
  ${color}
`;

Box.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.color,
};

Box.displayName = 'Box';

export default Box;
