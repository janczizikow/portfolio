import React from 'react';
import { css } from 'emotion';
import Layout from '../layout';
import { Box, Container, Heading, Text, Button } from '../components/UI';
import Controls from '../components/Project/Controls';

type Props = {
  pageContext: {
    name: string,
    description: string,
    photos: {
      url: string,
    }[],
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
    background-color: #277cea;
  }
`;

export default ({ pageContext }: Props) => {
  const { name, description, links } = pageContext;
  let projectLinks = null;
  if (links) {
    projectLinks = links.map(link => (
      <Button key={link.url} href={link.url}>
        {link.text}
      </Button>
    ));
  }
  return (
    <Layout>
      <Container>
        <Box textAlign="center" py={5} mx="auto" css="max-width: 720px;">
          <Heading css={projectTitleStyles}>{name}</Heading>
          <Text>{description}</Text>
          {projectLinks}
        </Box>
      </Container>
      <Box bg="lightGrey" py={5}>
        <Container>
          <Box textAlign="center" mx="auto" css="max-width: 720px;">
            <p>Images here</p>
          </Box>
        </Container>
      </Box>
      <Controls />
    </Layout>
  );
};
