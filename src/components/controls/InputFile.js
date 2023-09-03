import { Field, ErrorMessage } from 'formik';
import { TextError } from './TextError';
import {
  AdminControlWrapper,
  AdminStyledLabel,
} from './AdminControlWrappers.js';

export const InputFile = props => {
  const { label, name, type, setFiles, ...rest } = props;
  return (
    <AdminControlWrapper>
      <AdminStyledLabel htmlFor={name}>{label}</AdminStyledLabel>
      <Field name={name} {...rest}>
        {({ field, form }) => {
          const { setFieldValue } = form;

          return (
            <input
              {...field}
              {...rest}
              type={type}
              id={name}
              multiple
              onChange={event => {
                const images = event.currentTarget.files;
                console.log(images);
                setFiles(images);

                setFieldValue('image', event.currentTarget.value);
              }}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </AdminControlWrapper>
  );
};

//  return (
//    <div className="control">
//      <label htmlFor={name}>{label}</label>
//      <Field name={name} {...rest}>

//      </Field>
//      <ErrorMessage name={name} component={TextError} />
//    </div>
//  );
