import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Flex from './Flex';

const IconButton = ({ heightAuto, ...rest }) => (
  <Flex
    is="button"
    type="button"
    p={0}
    bg="transparent"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    css={css`
      height: ${heightAuto ? 'auto' : '100%'};
      border: 0;
      outline: 0;
      overflow: hidden;
      cursor: pointer;
    `}
    {...rest}
  />
);

IconButton.propTypes = {
  heightAuto: PropTypes.bool,
};

export default IconButton;
