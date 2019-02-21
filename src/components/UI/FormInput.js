/* eslint-disable */
import React from 'react';
import { FormGroup, Label, Input, FormErrorMsg } from './index';

const FormInput = ({ label, field, form: { touched, errors }, ...rest }) => (
  <FormGroup invalid={touched[field.name] && errors[field.name]}>
    <Label
      invalid={touched[field.name] && errors[field.name]}
      htmlFor={field.name}
    >
      {label}
    </Label>
    <Input
      {...field}
      {...rest}
      invalid={touched[field.name] && errors[field.name]}
    />
    {touched[field.name] && errors[field.name] && (
      <FormErrorMsg>{errors[field.name]}</FormErrorMsg>
    )}
  </FormGroup>
);

export default FormInput;
