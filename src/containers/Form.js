import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import api from '../utils/axios';
import {
  Row,
  Col,
  FormGroup,
  FormErrorMsg,
  Input,
  Label,
  Button,
  Heading,
  Modal,
} from '../components/UI';

const propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

const renderField = ({
  input,
  label,
  type,
  tag,
  rows,
  meta: { touched, error },
}) => (
  <FormGroup invalid={touched && error}>
    <Label invalid={touched && error} htmlFor={input.name}>
      {label}
    </Label>
    <Input
      {...input}
      rows={rows}
      tag={tag}
      invalid={touched && error}
      type={type}
    />
    {error && touched && <FormErrorMsg>{error}</FormErrorMsg>}
  </FormGroup>
);

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'This field is required';
  }

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.message) {
    errors.message = 'This field is required';
  }

  return errors;
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
                component={renderField}
                label="Name"
              />
            </Col>
            <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
              <Field
                name="email"
                type="email"
                component={renderField}
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
                component={renderField}
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
            <Heading m={0}>{error ? error.name : `Thanks ${name}!`}</Heading>
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
