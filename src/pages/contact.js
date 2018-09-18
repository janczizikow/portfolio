import React from 'react';
import Layout from '../layout';
import Form from '../containers/Form';
import {
  Box,
  Container,
  Row,
  Col,
  Heading,
  Text,
  Emoji,
} from '../components/UI';

export default () => {
  return (
    <Layout>
      <Box py={4}>
        <Container>
          <Row>
            <Col>
              <Heading is="h3">Let&apos;s build something awesome!</Heading>
              <Text>
                Fill in the form or{' '}
                <a href="mailto:jan.czizikow@gmail.com">email me</a> to get in
                touch.
              </Text>
              <Text>
                I&apos;m currently looking for job opportunities as a web
                developer. If you like what you saw and you&apos;re hiring
                let&apos;s talk <Emoji label="nerd-face">🤓</Emoji>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col
              flex={[
                '0 0 100%',
                '0 0 100%',
                `0 0 ${((7 / 12) * 100).toFixed(4)}%`,
              ]}
            >
              <Form />
            </Col>
            <Col
              flex={[
                '0 0 100%',
                '0 0 100%',
                `0 0 ${((5 / 12) * 100).toFixed(4)}%`,
              ]}
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
    </Layout>
  );
};
