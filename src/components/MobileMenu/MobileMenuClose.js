import React from 'react';
import { FiX } from 'react-icons/fi';
import { IconButton } from '../UI';

const MobileMenuClose = props => (
  <IconButton color="white" type="button" {...props}>
    <FiX size={24} />
  </IconButton>
);

export default MobileMenuClose;
