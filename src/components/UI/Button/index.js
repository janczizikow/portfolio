import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import StyledButton from './Styled';

const propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error']),
  block: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  space: PropTypes.bool,
};

const Button = ({
  to,
  href,
  disabled,
  loading,
  block,
  rounded,
  space,
  color,
  onClick,
  ...atributes
}) => {
  const handleClick = e => {
    if (disabled || loading) {
      e.preventDefault();
    } else {
      onClick && onClick(e);
    }
  };

  const Tag = to ? Link : href ? 'a' : 'button'; // eslint-disable-line

  return (
    <Tag
      to={to}
      href={href}
      rel={href && 'noopener'}
      target={href && '_blank'}
      disabled={disabled}
      onClick={handleClick}
      {...atributes}
    />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = {
  color: 'primary',
};

export default StyledButton.withComponent(Button);
