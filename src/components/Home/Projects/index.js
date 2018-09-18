import React from 'react';
import { css } from 'emotion';
import { Box, Container, Heading } from '../../UI';
import ProjectItem from './ProjectItem';
import theme from '../../../utils/theme';

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

const Projects = props => {
  const { projects } = props;

  let projectsDOM = null;

  if (projects) {
    projectsDOM = projects.map(project => (
      <ProjectItem key={project.node.id} project={project.node} />
    ));
  }

  return (
    <Box bg="lightGrey" py="3rem">
      <Container>
        <Heading textAlign="center">Projects</Heading>
        <Box css={projectsInner}>{projectsDOM}</Box>
      </Container>
    </Box>
  );
};

export default Projects;
