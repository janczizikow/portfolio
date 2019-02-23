import React, { Component } from 'react';
import { Heading, Modal } from '../../UI';
import ContactForm from './ContactForm';

class Form extends Component {
  state = {
    isModalOpen: false,
  };

  displayMessage = payload => {
    this.setState({
      isModalOpen: true,
      message: payload,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen, message } = this.state;

    return (
      <div>
        <ContactForm onSubmission={this.displayMessage} />
        <Modal
          isOpen={isModalOpen}
          onClose={this.handleModalClose}
          header={
            <Heading color="dark" m={0}>
              {message &&
                (message.error
                  ? message.error.name
                  : `Thanks ${message.name}!`)}
            </Heading>
          }
        >
          {message && message.error
            ? "Sorry, it's seems like something went wrong. Please try again or send me an email directly."
            : 'Your message was successfully sent! Will get back to you soon.'}
        </Modal>
      </div>
    );
  }
}

export default Form;
