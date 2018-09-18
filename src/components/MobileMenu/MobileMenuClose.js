import React from 'react';
import styled from 'react-emotion';
import { Icon } from '../UI';

const MobileMenuBtn = styled.button`
  padding: 0;
  height: 100%;
  background-color: transparent;
  border: 0;
  overflow: hidden;
  outline: 0;
  color: #fff;
`;

const MobileMenuClose = props => {
  return (
    <MobileMenuBtn type="button" {...props}>
      {Icon('x', [24, 24])}
    </MobileMenuBtn>
  );
};

export default MobileMenuClose;
