import React from 'react';
import { css, cx } from 'emotion';
import Flex from './Flex';

const IconButton = ({ heightAuto, className, ...rest }) => (
  <Flex
    is="button"
    type="button"
    p={0}
    bg="transparent"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    className={cx(
      css`
        height: ${heightAuto ? 'auto' : '100%'};
        border: 0;
        outline: 0;
        overflow: hidden;
        cursor: pointer;
      `,
      className
    )}
    {...rest}
  />
);

export default IconButton;
