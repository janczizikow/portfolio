import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Link from './ControlLink';
import { Box, Flex, Container, Text } from '../UI';

const propTypes = {
  prev: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
  }),
  next: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
  }),
};

const Controls = ({ prev, next }) => (
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

Controls.propTypes = propTypes;

export default Controls;
