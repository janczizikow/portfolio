import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'react-feather';
import { IconButton } from '../UI';
import presets from '../../utils/presets';

const propTypes = {
  onClick: PropTypes.func,
};

const HeaderToggle = ({ onClick }) => (
  <IconButton
    type="button"
    aria-label="mobile menu"
    color="headingColor"
    css={{ [presets.lg]: { display: 'none' } }}
    onClick={onClick}
  >
    <Menu />
  </IconButton>
);

HeaderToggle.propTypes = propTypes;

export default HeaderToggle;
