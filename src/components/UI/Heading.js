import styled from '@emotion/styled';
import { space, color, typography } from 'styled-system';
import shouldForwardProp from '@styled-system/should-forward-prop';
import propTypes from '@styled-system/prop-types';

const Heading = styled('h2', { shouldForwardProp })`
  ${space}
  ${color}
  ${typography}
`;

Heading.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
};
Heading.defaultProps = {
  color: 'headingColor',
};
Heading.displayName = 'Heading';

export default Heading;
