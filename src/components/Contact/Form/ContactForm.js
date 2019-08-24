import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Col, FormInput, Button } from '../../UI';
import api from '../../../utils/axios';

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

const Form = ({ isValid, isSubmitting }) => (
  <FormikForm>
    <Row>
      <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
        <Field label="Name" name="name" type="text" component={FormInput} />
      </Col>
      <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
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
    api
      .post('/submissions/', {
        submission: {
          ...values,
        },
      })
      .then(response => {
        const { name } = response.data;
        bag.props.onSubmissionSuccess(name);
        bag.resetForm();
        bag.setSubmitting(false);
      })
      .catch(error => {
        bag.props.onSubmissionFailed(error);
        bag.setSubmitting(false);
      });
  },
})(Form);
