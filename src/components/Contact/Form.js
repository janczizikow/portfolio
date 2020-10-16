import React, { useState } from 'react';
import { Heading, Modal, Text } from '../UI';
import ContactForm from './ContactForm';

const initalState = {
  isModalOpen: false,
  name: null,
  error: null,
};

const Form = () => {
  const [state, setState] = useState(initalState);

  const handleSubmitSuccess = name => {
    setState({
      isModalOpen: true,
      name,
      error: null,
    });
  };

  const handleSubmitFail = error => {
    setState({
      isModalOpen: true,
      name: null,
      error,
    });
  };

  const handleModalClose = () => {
    setState(s => ({
      ...s,
      isModalOpen: false,
    }));
  };

  const resetState = () => {
    setState(initalState);
  };

  const { isModalOpen, name, error } = state;
  const title = error ? error.name : name ? `Thanks ${name}!` : `Thanks!`; // eslint-disable-line no-nested-ternary
  const message = error
    ? "Sorry, it's seems like something went wrong. Please try again or send me an email directly."
    : 'Your message was successfully sent! Will get back to you soon.';

  return (
    <>
      <ContactForm
        onSubmissionSuccess={handleSubmitSuccess}
        onSubmissionFailed={handleSubmitFail}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onAfterClose={resetState}
        header={<Heading m={0}>{title}</Heading>}
      >
        <Text>{message}</Text>
      </Modal>
    </>
  );
};

export default Form;
