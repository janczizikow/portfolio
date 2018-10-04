import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Menu } from 'react-feather';

const propTypes = {
  onClick: PropTypes.func,
};

const ToggleButton = styled.button`
  padding: 0;
  height: 100%;
  background-color: transparent;
  border: 0;
  color: ${p => p.theme.colors.headingColor};
  outline: 0;
  cursor: pointer;

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    display: none;
  }
`;

const HeaderToggle = ({ onClick }) => (
  <ToggleButton type="button" onClick={onClick}>
    <Menu />
  </ToggleButton>
);

HeaderToggle.propTypes = propTypes;

export default HeaderToggle;
