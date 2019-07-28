import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Heading, Text } from '../../UI';

const propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string,
    thumbnail: PropTypes.shape({
      bigThumbnails: PropTypes.object,
      smallThumbnails: PropTypes.object,
    }),
  }),
  bigThumbnail: PropTypes.bool,
};

const ProjectItemLink = styled(Link)`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;

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
    padding: 0 10px;
  }

  @media only screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;

    &:hover {
      &::before {
        opacity: 0.6;
      }

      div {
        transform: scale(1.05);
      }
    }
  }

  @supports (display: grid) {
    max-width: 100%;
    padding: 0;

    @media only screen and (min-width: ${p => p.theme.breakpoints[2]}) {
      margin: 0;
    }

    &:first-of-type {
      grid-area: one;
    }

    &:nth-of-type(2) {
      grid-area: two;
    }

    &:nth-of-type(3) {
      grid-area: three;
    }

    &:nth-of-type(4) {
      grid-area: four;
    }

    &:nth-of-type(5) {
      grid-area: five;
    }
  }
`;

const ProjectThumbnail = styled('figure')`
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const ProjectImage = styled(Image)`
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

const ProjectItem = ({ project, bigThumbnail }) => (
  <ProjectItemLink to={`/projects/${project.slug}/`}>
    <ProjectThumbnail>
      <ProjectImage
        backgroundColor
        title={project.name}
        alt={project.name}
        fluid={
          bigThumbnail
            ? project.thumbnail.bigThumbnails.fluid
            : project.thumbnail.smallThumbnails.fluid
        }
      />
      <ProjectInner>
        <Text color="#fff">{project.date}</Text>
        <Heading is="h3" color="white">
          {project.name}
        </Heading>
      </ProjectInner>
    </ProjectThumbnail>
  </ProjectItemLink>
);

ProjectItem.propTypes = propTypes;

export default ProjectItem;
