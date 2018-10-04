import styled from 'react-emotion';
import Box from './Box';

const IconButton = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${p => (p.heightAuto ? 'auto' : '100%')};
  border: 0;
  overflow: hidden;
  outline: 0;
  cursor: pointer;
`;

IconButton.defaultProps = {
  is: 'button',
  bg: 'transparent',
  p: 0,
};

export default IconButton;
