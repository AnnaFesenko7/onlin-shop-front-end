import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';

import {
  AdminControlWrapper,
  AdminStyledLabel,
} from './AdminControlWrappers.js';

export const Textarea = props => {
  const { label, name, ...rest } = props;
  return (
    <AdminControlWrapper>
      <AdminStyledLabel htmlFor={name}>{label}</AdminStyledLabel>

      <Field as="textarea" name={name} id={name} {...rest} />

      <ErrorMessage name={name} component={TextError} />
    </AdminControlWrapper>
  );
};
