import React from 'react';
import PropTypes from 'prop-types';
import { withFormik, Form as FormikForm, Field } from 'formik';
import { ContactFormSchema, ContactFormSubmit } from './helpers';
import { Row, Col, FormInput, Button } from '../../UI';

const propTypes = {
  isValid: PropTypes.bool,
  isSubmitting: PropTypes.bool,
};

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
  mapPropsToValues: () => ({ name: '', email: '', message: '' }),
  validationSchema: ContactFormSchema,
  handleSubmit: ContactFormSubmit,
  displayName: 'ContactForm',
})(Form);
