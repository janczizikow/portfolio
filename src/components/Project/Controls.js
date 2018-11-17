// @flow
import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Link from './ControlLink';
import { Box, Flex, Container, Text } from '../UI';
import { type ProjectNav } from '../../utils/types';

type ControlsProps = {
  prev: ProjectNav | void,
  next?: ProjectNav | void,
};

const Controls = (props: ControlsProps) => {
  const { prev, next } = props;

  return (
    <Container>
      <Box mx="auto" css="max-width: 720px;">
        <Flex py={4} alignItems="center" justifyContent="space-between">
          <Flex flexDirection="column" alignItems="flex-start" textAlign="left">
            {prev && (
              <>
                <Text is="span" fontSize="14px">
                  Previous
                </Text>
                <Link prev to={`/projects/${prev.slug}`}>
                  <ChevronLeft />
                  {prev.name}
                </Link>
              </>
            )}
          </Flex>
          <Flex flexDirection="column" alignItems="flex-end" textAlign="right">
            {next && (
              <>
                <Text is="span" fontSize="14px">
                  Next
                </Text>
                <Link next to={`/projects/${next.slug}`}>
                  {next.name}
                  <ChevronRight />
                </Link>
              </>
            )}
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Controls;
