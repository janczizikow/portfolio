import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { Box, Container, Heading, Text, Button } from '../components/UI';
import Controls from '../components/Project/Controls';
import theme from '../utils/theme';

const propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        photo: PropTypes.shape({
          url: PropTypes.string,
        }),
      })
    ),
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
  pageContext: { name, description, links, next, prev, photos },
}) => {
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
        <Box textAlign="center" py={5} mx="auto" css="max-width: 720px;">
          <Heading css={projectTitleStyles}>{name}</Heading>
          <Text>{description}</Text>
          {projectLinks}
        </Box>
      </Container>
      <Box bg="bgGreyColor" py={5}>
        <Container>
          <Box textAlign="center" mx="auto" css="max-width: 720px;">
            {photos.map((p, i) => (
              <img key={p.id} src={p.photo.url} alt={`${name}-${i}`} />
            ))}
          </Box>
        </Container>
      </Box>
      <Controls next={next} prev={prev} />
    </>
  );
};

ProjectPage.propTypes = propTypes;

export default ProjectPage;
