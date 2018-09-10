/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { css, cx } from 'react-emotion';

const buttonStyles = css`
  padding: 0.375rem 0.75rem;
  position: relative;
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  outline: 0;
  user-select: none;
  transition: color 0.15s ease-in-out, opacity 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
  cursor: pointer;
`;

export default class Button extends Component {
  onClick = e => {
    if (this.props.disabled || this.props.loading) {
      e.preventDefault();
    } else {
      this.props.onClick && this.props.onClick(e);
    }
  };

  render() {
    const {
      to,
      disabled,
      loading,
      block,
      link,
      outline,
      rounded,
      color,
      className,
      ...atributes
    } = this.props;

    const Tag = to ? Link : 'button';
    return (
      <Tag
        to={to}
        {...atributes}
        className={cx(buttonStyles, className)}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}
