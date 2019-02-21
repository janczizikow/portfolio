import React, { Component } from 'react';
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

class Button extends Component {
  static defaultProps = {
    color: 'primary',
  };

  onClick = e => {
    const { disabled, loading, onClick } = this.props;

    if (disabled || loading) {
      e.preventDefault();
    } else {
      onClick && onClick(e);
    }
  };

  render() {
    const {
      to,
      href,
      disabled,
      loading,
      block,
      rounded,
      space,
      color,
      ...atributes
    } = this.props;

    const Tag = to ? Link : href ? 'a' : 'button'; // eslint-disable-line

    return (
      <Tag
        to={to}
        href={href}
        rel={href && 'noopener'}
        target={href && '_blank'}
        {...atributes}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}

Button.propTypes = propTypes;

export default StyledButton.withComponent(Button);
