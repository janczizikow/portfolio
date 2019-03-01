import styled from '@emotion/styled';
import { space, color, fontSize, textAlign, lineHeight } from 'styled-system';

const Text = styled.p`
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
Text.displayName = 'Text';

export default Text;
