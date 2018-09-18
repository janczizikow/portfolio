import React, { Component } from 'react';
import styled from 'react-emotion';

const StyledInput = styled('input')`
  padding: ${p => p.theme.space[2]}px 0;
  display: block;
  border: 0;
  width: 100%;
  border-bottom: 2px solid ${p => p.theme.colors.grey};
  outline: none;
  font-family: ${p =>
    p.theme.typography.bodyFontFamily.map(font => `'${font}'`).join(', ')};
  background: transparent;
  resize: none; /* prevent resizing the textarea */
`;

class Input extends Component {
  static defaultProps = {
    tag: 'input',
    type: 'text',
  };

  focus = () => {
    if (this.ref) {
      this.ref.focus();
    }
  };

  render() {
    const {
      tag: Tag,
      type,
      block,
      invalid,
      valid,
      color,
      ...attributes
    } = this.props;

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

    return (
      <Tag
        ref={ref => {
          this.ref = ref;
        }}
        {...attributes}
      />
    );
  }
}

export default StyledInput.withComponent(Input);
