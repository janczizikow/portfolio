import styled from '@emotion/styled';
import {
  width,
  height,
  space,
  flex,
  alignSelf,
  order,
  color,
  textAlign,
} from 'styled-system';

const Box = styled.div`
  ${width}
  ${height}
  ${space}
  ${flex}
  ${alignSelf}
  ${order}
  ${color}
  ${textAlign}
`;

Box.propTypes = {
  ...width.propTypes,
  ...height.propTypes,
  ...space.propTypes,
  ...flex.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
};

Box.displayName = 'Box';

export default Box;
