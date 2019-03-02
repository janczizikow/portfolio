import styled from '@emotion/styled';
import {
  space,
  color,
  fontSize,
  textAlign,
  lineHeight,
  letterSpacing,
} from 'styled-system';
import tag from 'clean-tag';

const Heading = styled(tag.h2)`
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
Heading.defaultProps = {
  color: 'headingColor',
};
Heading.displayName = 'Heading';

export default Heading;
