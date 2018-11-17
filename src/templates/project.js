// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from 'emotion';
import { v4 } from 'node-uuid';
import { Box, Container, Heading, Text, Button } from '../components/UI';
import Controls from '../components/Project/Controls';
import theme from '../utils/theme';
import { type ProjectNav } from '../utils/types';

interface ProjectProps {
  data: {
    project: {
      name: string,
      descriptionNode: {
        description: string,
      },
      links?: Array<{
        url: string,
        text: string,
      }>,
      photos: Array<{
        fluid: string,
      }>,
    },
  };
  pageContext: {
    next: ProjectNav | void,
    prev: ProjectNav | void,
  };
}

const projectTitleStyles = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -8px;
    width: 50px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${theme.colors.primary};
  }
`;

const ProjectPage = ({
  pageContext: { next, prev },
  data: {
    project: { name, descriptionNode, links, photos },
  },
}: ProjectProps) => {
  let projectLinks = null;

  if (links) {
    projectLinks = links.map(link => (
      <Button space key={link.url} href={link.url}>
        {link.text}
      </Button>
    ));
  }

  return (
    <>
      <Container>
        <Box py={5} mx="auto" textAlign="center" css="max-width: 720px;">
          <Heading css={projectTitleStyles}>{name}</Heading>
          <Text>{descriptionNode.description}</Text>
          {projectLinks}
        </Box>
      </Container>
      <Box bg="bgGreyColor" py={5}>
        <Container>
          <Box textAlign="center" mx="auto" css="max-width: 720px;">
            {photos.map((photo, i) => (
              <Image
                key={v4()}
                css={{ marginBottom: '1.5rem' }}
                fluid={photo.fluid}
                alt={`${name}-${i}`}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Controls next={next} prev={prev} />
    </>
  );
};

export const projectQuery = graphql`
  query projectQuery($id: String!) {
    project: contentfulProject(id: { eq: $id }) {
      name
      descriptionNode: childContentfulProjectDescriptionTextNode {
        description
      }
      links {
        text
        url
      }
      photos {
        fluid(maxWidth: 720, quality: 80) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default ProjectPage;
