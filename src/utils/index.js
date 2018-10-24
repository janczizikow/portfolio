export const updateStateObject = (prevState, nextState) => ({
  ...prevState,
  ...nextState,
});

export const validate = values => {
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
