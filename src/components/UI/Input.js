import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledInput = styled('input')`
  padding: 6px 0;
  display: block;
  border: 0;
  width: 100%;
  border-bottom: 2px solid
    ${p => (p.invalid ? p.theme.colors.error : p.theme.colors.grey)};
  outline: none;
  font-family: ${p =>
    p.theme.typography.bodyFontFamily.map(font => `'${font}'`).join(', ')};
  line-height: 1.15;
  color: ${p => p.theme.colors.headingColor};
  background: transparent;
  resize: none; /* prevent resizing the textarea */

  &:active,
  &:focus {
    border-color: ${p =>
      p.invalid ? p.theme.colors.error : p.theme.colors.primary};
  }
`;

const propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  block: PropTypes.bool,
  invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const defaultProps = {
  tag: 'input',
  type: 'text',
};
/* eslint-disable no-param-reassign */
const Input = React.forwardRef(
  ({ tag: Tag, type, block, invalid, ...attributes }, ref) => {
    if (Tag === 'input') {
      attributes.type = type;
    }

    if (
      attributes.children &&
      ((Tag === 'input' && type !== 'submit') ||
        type === 'radio' ||
        type === 'checkbox')
    ) {
      delete attributes.children;
    }

    return <Tag ref={ref} {...attributes} />;
  }
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default StyledInput.withComponent(Input);
