import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Box, Container, Heading } from '../../UI';
import ProjectItem from './ProjectItem';
import theme from '../../../utils/theme';

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }),
    })
  ),
};

const projectsInner = css`
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
  }

  @supports (display: grid) {
    @media only screen and (min-width: ${theme.breakpoints[1]}) {
      margin: 0;
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(4, 1fr);
      grid-template-areas:
        'one one two two'
        'three three four four'
        'five five six six';
      grid-gap: 20px;
    }

    @media only screen and (min-width: ${theme.breakpoints[2]}) {
      grid-template: repeat(2, 1fr) / repeat(4, 1fr);
      grid-template-areas:
        'one one two three'
        'one one four five';
    }
  }
`;

const Projects = ({ projects }) => (
  <Box id="projects" bg="bgGreyColor" py="3rem">
    <Container>
      <Heading textAlign="center">Projects</Heading>
      <Box css={projectsInner}>
        {projects &&
          projects.map((project, i) => (
            <ProjectItem
              key={project.node.id}
              project={project.node}
              bigThumbnail={i === 0}
            />
          ))}
      </Box>
    </Container>
  </Box>
);

Projects.propTypes = propTypes;

export default Projects;
