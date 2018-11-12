// @flow
import React from 'react';
import { css } from 'emotion';
import facepaint from 'facepaint';
import Box from './Box';
import Flex from './Flex';
import theme from '../../utils/theme';

type ContainerProps = { fluid?: boolean };

const { breakpoints, containerWidths } = theme;
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp})`));

const Container = (props: ContainerProps) => {
  const { fluid, ...rest } = props;

  return (
    <Box
      mx="auto"
      px={3}
      width="100%"
      className={
        !fluid &&
        css(
          mq({
            maxWidth: containerWidths,
          })
        )
      }
      {...rest}
    />
  );
};

const Row = (props: any) => (
  <Flex
    mx={-3}
    alignItems="center"
    justifyContent="space-between"
    flexWrap="wrap"
    {...props}
  />
);

const Col = (props: any) => (
  <Box px={3} width="100%" css={{ minHeight: 1 }} {...props} />
);

export { Col, Container, Row };
