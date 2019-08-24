import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import facepaint from 'facepaint';
import Box from './Box';
import Flex from './Flex';
import theme from '../../utils/theme';

const propTypes = {
  fluid: PropTypes.bool,
};

const { breakpoints, containerWidths } = theme;
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp})`));

const Container = ({ fluid, ...rest }) => (
  <Box
    mx="auto"
    px={3}
    width="100%"
    css={!fluid && css(mq({ maxWidth: containerWidths }))}
    {...rest}
  />
);

Container.propTypes = propTypes;

const Row = props => (
  <Flex
    mx={-3}
    alignItems="center"
    justifyContent="space-between"
    flexWrap="wrap"
    {...props}
  />
);

const Col = props => (
  <Flex display="block" px={3} width="100%" minHeight="1px" {...props} />
);

export { Col, Container, Row };
