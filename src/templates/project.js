import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import SEO from '../components/SEO';
import { Box, Container, Heading, Text, Button } from '../components/UI';
import Controls from '../components/Project/Controls';
import theme from '../utils/theme';

const propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
    next: PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
  data: PropTypes.shape({
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      photos: PropTypes.instanceOf(Array),
    }),
  }),
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
  pageContext: { next, prev },
  data: {
    project: { name, description, links, photos },
  },
}) => (
  <>
    <SEO title={name} description={description} />
    <Container>
      <Box py={5} mx="auto" css={{ maxWidth: '720px', textAlign: 'center' }}>
        <Heading css={projectTitleStyles}>{name}</Heading>
        <Text>{description}</Text>
        {links &&
          links.map(link => (
            <Button space key={link.url} href={link.url}>
              {link.text}
            </Button>
          ))}
      </Box>
    </Container>
    <Box bg="bgGreyColor" py={5}>
      <Container>
        <Box mx="auto" css={{ maxWidth: '720px' }}>
          {photos &&
            photos.map((photo, i) => (
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

ProjectPage.propTypes = propTypes;

export const pageQuery = graphql`
  query($id: String!) {
    project: strapiProject(id: { eq: $id }) {
      name
      description
      links {
        text
        url
      }
      photos {
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
