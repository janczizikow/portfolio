import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import api from '../utils/axios';
import { validate } from '../utils';
import { Row, Col, FormInput, Button, Heading, Modal } from '../components/UI';

const propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

class Form extends Component {
  state = {
    isModalOpen: false,
    name: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  submit = values => {
    const { reset } = this.props;
    const submission = {
      ...values,
    };
    this.setState({ loading: true });
    api
      .post('/submissions', {
        submission,
      })
      .then(response => {
        if (
          this._isMounted &&
          (response.status === 200 || response.status === 201)
        ) {
          const { name } = response.data;
          this.setState({
            name,
            loading: false,
            isModalOpen: true,
            error: null,
          });
          reset();
        }
      })
      .catch(error => {
        if (this._isMounted) {
          this.setState({
            loading: false,
            isModalOpen: true,
            error,
          });
        }
      });
  };

  render() {
    const { isModalOpen, loading, error, name } = this.state;
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.submit)}>
          <Row>
            <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
              <Field
                name="name"
                type="text"
                component={FormInput}
                label="Name"
              />
            </Col>
            <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
              <Field
                name="email"
                type="email"
                component={FormInput}
                label="Email"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Field
                name="message"
                label="Message"
                props={{ tag: 'textarea', rows: 7 }}
                component={FormInput}
              />
              <Button
                rounded
                disabled={pristine || submitting || loading}
                loading={submitting || loading}
                type="submit"
              >
                Send
              </Button>
            </Col>
          </Row>
        </form>
        <Modal
          isOpen={isModalOpen}
          onClose={this.handleModalClose}
          header={
            <Heading color="dark" m={0}>
              {error ? error.name : `Thanks ${name}!`}
            </Heading>
          }
        >
          {error
            ? "Sorry, it's seems like something went wrong. Please try again or send me an email directly."
            : 'Your message was successfully sent! Will get back to you soon.'}
        </Modal>
      </div>
    );
  }
}

Form.propTypes = propTypes;

export default reduxForm({
  form: 'contact',
  validate,
})(Form);
