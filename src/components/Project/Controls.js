import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Container, Text, Icon } from '../UI';

type Props = {
  prev?: {
    to: string,
    text: string,
  },
  next?: {
    to: string,
    text: string,
  },
};

const Controls = ({ prev, next }: Props) => (
  <Container>
    <Box mx="auto" css="max-width: 720px;">
      <Flex py={4} alignItems="center" justifyContent="space-between">
        {prev && (
          <Flex flexDirection="column" alignItems="flex-start" textAlign="left">
            <Text is="span" fontSize="14px">
              Previous
            </Text>
            <Link to={prev.to}>
              {Icon('chevron-left', ['24', '24'])}
              {prev.text}
            </Link>
          </Flex>
        )}
        {next && (
          <Flex flexDirection="column" alignItems="flex-end" textAlign="right">
            <Text is="span" fontSize="14px">
              Next
            </Text>
            <Link to={next.to}>
              {Icon('chevron-right', ['24', '24'])}
              {next.text}
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  </Container>
);

export default Controls;
