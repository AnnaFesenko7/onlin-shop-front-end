import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import {
  AdminControlWrapper,
  AdminStyledLabel,
} from './AdminControlWrappers.js';

export const Select = props => {
  const { label, name, options, ...rest } = props;
  return (
    <AdminControlWrapper>
      <AdminStyledLabel htmlFor={name}>{label}</AdminStyledLabel>

      <Field as="select" name={name} id={name} {...rest}>
        {options?.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </AdminControlWrapper>
  );
};
