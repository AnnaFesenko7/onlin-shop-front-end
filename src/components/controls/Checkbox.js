import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import React from 'react';

import {
  AdminStyledLabel,
  AdminCheckboxLabel,
  AdminCheckboxWrapper,
} from './AdminControlWrappers.js';

export const CheckboxGroup = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div style={{ marginBottom: 20 }}>
      <AdminStyledLabel htmlFor={name}>{label}</AdminStyledLabel>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <AdminCheckboxWrapper>
                  <input
                    {...field}
                    id={option.value}
                    type="checkbox"
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <AdminCheckboxLabel htmlFor={option.value}>
                    {option.key}
                  </AdminCheckboxLabel>
                </AdminCheckboxWrapper>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
