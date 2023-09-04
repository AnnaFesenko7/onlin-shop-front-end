import { Field, ErrorMessage, FieldArray } from 'formik';
import { TextError } from './TextError';
import {
  AdminControlWrapper,
  AdminStyledLabel,
} from './AdminControlWrappers.js';

export const InputList = props => {
  const { label, name, ...rest } = props;
  return (
    <AdminControlWrapper>
      <AdminStyledLabel htmlFor={name}>{label}</AdminStyledLabel>

      <FieldArray name={name}>
        {fieldArrProps => {
          const { push, remove, form } = fieldArrProps;
          const { values } = form;

          const options = values[`${name}`];

          return (
            <div>
              {options.map((option, index) => (
                <div key={index}>
                  <Field name={`${name}[${index}]`} {...rest} />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      -
                    </button>
                  )}

                  <button type="button" onClick={() => push('')}>
                    +
                  </button>
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>

      <ErrorMessage name={name} component={TextError} />
    </AdminControlWrapper>
  );
};
