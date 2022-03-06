import React from 'react';
import SEO from '../components/SEO';
import Form from '../components/Contact';
import {
  Box,
  Container,
  Row,
  Col,
  Heading,
  Text,
  Link,
  Emoji,
} from '../components/UI';

const Contact = () => (
  <Box py={5}>
    <SEO title="Contact" />
    <Container>
      <Row>
        <Col>
          <Heading as="h3">Let&apos;s build something awesome!</Heading>
          <Text>
            Fill in the form or{' '}
            <Link href="mailto:jan.czizikow@gmail.com">email me</Link> to get in
            touch.
          </Text>
          <Text>
            I&apos;m currently not looking for job opportunities, but feel free
            get in touch.
            <Emoji label="nerd-face">🤓</Emoji>
          </Text>
        </Col>
      </Row>
      <Row alignItems="flex-start">
        <Col width={[1, null, null, `${((7 / 12) * 100).toFixed(4)}%`]}>
          <Form />
        </Col>
        <Col
          order={[-1, null, null, 0]}
          width={[1, null, null, `${((5 / 12) * 100).toFixed(4)}%`]}
        >
          <Heading as="h4" mb={2}>
            email
          </Heading>
          <Text>jan.czizikow[at]gmail.com</Text>
          <Heading as="h4" mb={2}>
            location
          </Heading>
          <Text>Berlin, Germany</Text>
        </Col>
      </Row>
    </Container>
  </Box>
);

export default Contact;
