// @flow
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { css } from 'emotion';
import { Box, Container, Heading } from '../../UI';
import ProjectItem from './ProjectItem';
import theme from '../../../utils/theme';
import type { Project } from '../../../utils/types';

export const PROJECTS_QUERY = graphql`
  query ProjectsQuery {
    projects: allContentfulProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          name
          slug
          date(formatString: "YYYY, MMM DD")
          bigThumb: bigThumbnail {
            fluid(maxWidth: 1140) {
              ...GatsbyContentfulFluid
            }
          }
          smallThumb: bigThumbnail {
            fluid(maxWidth: 720) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

type ProjectsProps = {
  projects: {
    edges: Array<{
      node: Project & {
        bigThumb: {
          fluid: {
            src: string,
          },
        },
        smallThumb: {
          fluid: {
            src: string,
          },
        },
      },
    }>,
  },
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

const Projects = () => (
  <StaticQuery
    query={PROJECTS_QUERY}
    render={({ projects }: ProjectsProps) => (
      <Box id="projects" bg="bgGreyColor" py="3rem">
        <Container>
          <Heading textAlign="center">Projects</Heading>
          <Box css={projectsInner}>
            {projects.edges.map((project, i) => (
              <ProjectItem
                key={project.node.id}
                project={project.node}
                bigThumbnail={i === 0}
              />
            ))}
          </Box>
        </Container>
      </Box>
    )}
  />
);

export default Projects;
