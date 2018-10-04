import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.string,
};

const Emoji = ({ label, children }) => (
  <span
    role="img"
    aria-label={label && label}
    aria-hidden={label ? 'false' : 'true'}
  >
    {children}
  </span>
);

Emoji.propTypes = propTypes;

export default Emoji;
