import React from 'react';
import { X } from 'react-feather';
import { IconButton } from '../UI';

const MobileMenuClose = props => (
  <IconButton color="white" type="button" {...props}>
    <X />
  </IconButton>
);

export default MobileMenuClose;
