// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from 'emotion';
import { Box, Container, Heading, Text, Button } from '../components/UI';
import Controls from '../components/Project/Controls';
import theme from '../utils/theme';

type ProjectProps = {
  pageContext: {
    name: string,
    description: string,
    links?: Array<{
      url: string,
      text: string,
    }>,
    next?: {
      name: string,
      slug: string,
    },
    prev?: {
      name: string,
      slug: string,
    },
  },
  data: {
    ProjectImages: {
      childrenFile: Array<{
        id: string,
        childImageSharp: {
          fluid: string,
        },
      }>,
    },
  },
};

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
  pageContext: { name, description, links, next, prev },
  data: {
    ProjectImages: { childrenFile: photos },
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
          <Text>{description}</Text>
          {projectLinks}
        </Box>
      </Container>
      <Box bg="bgGreyColor" py={5}>
        <Container>
          <Box textAlign="center" mx="auto" css="max-width: 720px;">
            {photos.map((photo, i) => (
              <Image
                key={photo.id}
                css={{ marginBottom: '1.5rem' }}
                fluid={photo.childImageSharp.fluid}
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

export const pageQuery = graphql`
  query($id: String!) {
    ProjectImages: project(id: { eq: $id }) {
      childrenFile {
        id
        childImageSharp {
          fluid(maxWidth: 720, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default ProjectPage;
