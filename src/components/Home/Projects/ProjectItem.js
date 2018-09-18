import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
// import Image from 'gatsby-image';
import { Heading, Text } from '../../UI';

const ProjectItemLink = styled(Link)`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.dark};
    opacity: 0;
    z-index: 1;
    transition: opacity 0.62s cubic-bezier(0.05, 0.2, 0.1, 1);
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    &:hover {
      &::before {
        opacity: 0.6;
      }

      img {
        transform: scale(1.05);
      }
    }
  }

  @supports (display: grid) {
    max-width: 100%;

    &:first-child {
      grid-area: one;
    }

    &:nth-child(2) {
      grid-area: two;
    }

    &:nth-child(3) {
      grid-area: three;
    }

    &:nth-child(4) {
      grid-area: four;
    }

    &:nth-child(5) {
      grid-area: five;
    }
  }
`;

const ProjectThumbnail = styled('figure')`
  margin: 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
  }
`;

const ProjectImage = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.62s cubic-bezier(0.05, 0.2, 0.1, 1);
`;

const ProjectInner = styled('figcaption')`
  position: absolute;
  padding: 30px;
  top: auto;
  bottom: 30px;
  left: 0;
  padding-bottom: 0;
  color: ${p => p.theme.colors.white};
  z-index: 2;
`;

const ProjectItem = ({ project }) => {
  return (
    <ProjectItemLink to={`projects/${project.slug}`}>
      <ProjectThumbnail>
        <ProjectImage alt={project.name} src={project.thumbnail.url} />
        <ProjectInner>
          <Text>{project.date}</Text>
          <Heading is="h3" color="white">
            {project.name}
          </Heading>
        </ProjectInner>
      </ProjectThumbnail>
    </ProjectItemLink>
  );
};

export default ProjectItem;
