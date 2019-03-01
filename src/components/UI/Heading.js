import styled from '@emotion/styled';
import {
  space,
  color,
  fontSize,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';

const Heading = styled.h2`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
  ${letterSpacing}
`;

Heading.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
};
Heading.displayName = 'Heading';

export default Heading;
