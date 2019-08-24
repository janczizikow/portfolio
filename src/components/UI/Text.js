import styled from '@emotion/styled';
import { space, color, typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import propTypes from '@styled-system/prop-types';

const Text = styled('p', { shouldForwardProp })`
  ${space}
  ${color}
  ${typography}
`;

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
};
Text.defaultProps = {
  color: 'textColor',
};
Text.displayName = 'Text';

export default Text;
