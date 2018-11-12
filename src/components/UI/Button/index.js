// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import StyledButton from './Styled';

type ButtonProps = {
  to?: string,
  href?: string,
  color?: 'primary' | 'secondary' | 'success' | 'error',
  block?: boolean,
  rounded?: boolean,
  disabled?: boolean,
  loading?: boolean,
  onClick?: (e: SyntheticEvent<HTMLInputElement>) => mixed,
  space?: boolean,
};

class Button extends React.Component<ButtonProps, {}> {
  static defaultProps = {
    color: 'primary',
  };

  onClick = (e: SyntheticEvent<HTMLInputElement>) => {
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

export default StyledButton.withComponent(Button);
