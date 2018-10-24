import React from 'react';
import { FormGroup, Label, Input, FormErrorMsg } from './index';

const FormInput = ({
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

export default FormInput;
