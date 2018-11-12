// @flow
import React from 'react';
import { withFormik, Form as FormikForm, FastField } from 'formik';
import { ContactFormSchema, ContactFormSubmit } from './helpers';
import { Row, Col, FormInput, Button } from '../../UI';

type FormProps = {
  isValid?: boolean,
  isSubmitting?: boolean,
};

const Form = (props: FormProps) => {
  const { isValid, isSubmitting } = props;

  return (
    <FormikForm>
      <Row>
        <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
          <FastField
            label="Name"
            name="name"
            type="text"
            component={FormInput}
          />
        </Col>
        <Col flex={['0 0 100%', '0 0 100%', '0 0 50%']}>
          <FastField
            label="Email"
            name="email"
            type="email"
            component={FormInput}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FastField
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
};

export default withFormik({
  mapPropsToValues: () => ({ name: '', email: '', message: '' }),
  validationSchema: ContactFormSchema,
  handleSubmit: ContactFormSubmit,
  displayName: 'ContactForm',
})(Form);
