import React from 'react';
import SEO from '../components/SEO';
import Form from '../components/Contact/Form';
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
          <Heading is="h3">Let&apos;s build something awesome!</Heading>
          <Text>
            Fill in the form or{' '}
            <Link href="mailto:jan.czizikow@gmail.com">email me</Link> to get in
            touch.
          </Text>
          <Text>
            I&apos;m currently looking for job opportunities as a web developer.
            If you like what you saw and you&apos;re hiring let&apos;s talk{' '}
            <Emoji label="nerd-face">🤓</Emoji>
          </Text>
        </Col>
      </Row>
      <Row alignItems="flex-start">
        <Col
          flex={['0 0 100%', null, null, `0 0 ${((7 / 12) * 100).toFixed(4)}%`]}
        >
          <Form />
        </Col>
        <Col
          order={[-1, null, null, 0]}
          flex={['0 0 100%', null, null, `0 0 ${((5 / 12) * 100).toFixed(4)}%`]}
        >
          <Heading is="h4" mb={2}>
            email
          </Heading>
          <Text>jan.czizikow@gmail.com</Text>
          <Heading is="h4" mb={2}>
            location
          </Heading>
          <Text>Berlin, Germany</Text>
        </Col>
      </Row>
    </Container>
  </Box>
);

export default Contact;
