import React from 'react';
import styled from 'react-emotion';

import { Icon } from '../UI';

const ToggleButton = styled.button`
  padding: 0;
  height: 100%;
  background-color: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: none;
  }
`;

const HeaderToggle = ({ onClick }) => (
  <ToggleButton type="button" onClick={onClick}>
    {Icon('menu', [24, 24])}
  </ToggleButton>
);

export default HeaderToggle;
