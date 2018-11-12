// @flow
import type { Node, ComponentType } from 'react';
import styled from 'react-emotion';

type LabelProps = {
  htmlFor: string,
  block?: boolean,
  bold?: boolean,
  hidden?: boolean,
  invalid?: string | boolean,
  className?: string,
  children?: Node,
  disabled?: boolean,
  check?: boolean,
};

const Label: ComponentType<LabelProps> = styled.label`
  display: ${p => {
    if (p.hidden) {
      return 'none';
    }

    if (p.block) {
      return 'block';
    }

    return 'inline-block';
  }};
  color: ${p => p.invalid && p.theme.colors.error};
`;

export default Label;
