import styled from '@emotion/styled';
import { space, color, fontSize, textAlign, lineHeight } from 'styled-system';
import tag from 'clean-tag';

const Text = styled(tag.p)`
  ${space}
  ${color}
  ${fontSize}
  ${textAlign}
  ${lineHeight}
`;

Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...textAlign.propTypes,
};
Text.defaultProps = {
  color: 'textColor',
};
Text.displayName = 'Text';

export default Text;
