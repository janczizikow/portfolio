import React from 'react';
import { Heading, Modal, Text } from '../../UI';
import ContactForm from './ContactForm';

class Form extends React.PureComponent {
  state = {
    isModalOpen: false,
    name: null,
    error: null,
  };

  handleSubmitSuccess = name => {
    this.setState({
      isModalOpen: true,
      name,
    });
  };

  handleSubmitFail = error => {
    this.setState({
      isModalOpen: true,
      error,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
      name: null,
      error: null,
    });
  };

  render() {
    const { isModalOpen, name, error } = this.state;
    const heading = error ? error.name : name ? `Thanks ${name}!` : `Thanks!`; // eslint-disable-line no-nested-ternary
    const message = error
      ? "Sorry, it's seems like something went wrong. Please try again or send me an email directly."
      : 'Your message was successfully sent! Will get back to you soon.';

    return (
      <>
        <ContactForm
          onSubmissionSuccess={this.handleSubmitSuccess}
          onSubmissionFailed={this.handleSubmitFail}
        />
        <Modal
          isOpen={isModalOpen}
          onClose={this.handleModalClose}
          header={
            <Heading color="dark" m={0}>
              {heading}
            </Heading>
          }
        >
          <Text>{message}</Text>
        </Modal>
      </>
    );
  }
}

export default Form;
