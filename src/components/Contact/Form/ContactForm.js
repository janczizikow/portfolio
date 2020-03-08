import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Col, FormInput, Button } from '../../UI';

const propTypes = {
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool,
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('This filed is required'),
  email: Yup.string()
    .required('This field is required')
    .email('Email address is invalid'),
  message: Yup.string().required('This field is required'),
});

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Form = ({ isValid, isSubmitting }) => (
  <FormikForm
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input name="bot-field" hidden />
    <Row>
      <Col width={[1, 1, 1 / 2]}>
        <Field label="Name" name="name" type="text" component={FormInput} />
      </Col>
      <Col width={[1, 1, 1 / 2]}>
        <Field label="Email" name="email" type="email" component={FormInput} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Field
          name="message"
          label="Message"
          tag="textarea"
          rows={7}
          component={FormInput}
        />
        <Button
          rounded
          type="submit"
          disabled={!isValid || isSubmitting}
          loading={isSubmitting}
        >
          Send
        </Button>
      </Col>
    </Row>
  </FormikForm>
);

Form.propTypes = propTypes;

export default withFormik({
  displayName: 'ContactForm',
  mapPropsToValues: () => ({ name: '', email: '', message: '' }),
  validationSchema: ContactFormSchema,
  handleSubmit: (values, bag) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        bag.props.onSubmissionSuccess(values.name);
        bag.resetForm();
        bag.setSubmitting(false);
      })
      .catch(error => {
        bag.props.onSubmissionFailed(error);
        bag.setSubmitting(false);
      });
  },
})(Form);
