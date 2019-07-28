import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ControlLink from './ControlLink';
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
    <Box mx="auto" css={{ maxWidth: '720px' }}>
      <Flex py={4} alignItems="center" justifyContent="space-between">
        <Flex flexDirection="column" alignItems="flex-start" textAlign="left">
          {prev && (
            <>
              <Text is="span" fontSize="14px">
                Previous
              </Text>
              <ControlLink prev to={`/projects/${prev.slug}/`}>
                <FiChevronLeft size={24} />
                {prev.name}
              </ControlLink>
            </>
          )}
        </Flex>
        <Flex flexDirection="column" alignItems="flex-end" textAlign="right">
          {next && (
            <>
              <Text is="span" fontSize="14px">
                Next
              </Text>
              <ControlLink next to={`/projects/${next.slug}/`}>
                {next.name}
                <FiChevronRight size={24} />
              </ControlLink>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  </Container>
);

Controls.propTypes = propTypes;

export default Controls;
