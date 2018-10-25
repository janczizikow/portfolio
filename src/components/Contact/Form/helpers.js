import * as Yup from 'yup';
import api from '../../../utils/axios';

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('This filed is required'),
  email: Yup.string()
    .required('This field is required')
    .email('Email address is invalid'),
  message: Yup.string().required('This field is required'),
});

export const ContactFormSubmit = (values, bag) => {
  api
    .post('/submissions', {
      submission: {
        ...values,
      },
    })
    .then(response => {
      const { name } = response.data;
      bag.props.onSubmission({ name });
      bag.resetForm();
      bag.setSubmitting(false);
    })
    .catch(error => {
      bag.props.onSubmission({ error });
      bag.setSubmitting(false);
    });
};
