import { Input } from 'components/controls/Input';
import { Textarea } from 'components/controls/Textarea';
import { Select } from 'components/controls/Select';
import { RadioButtons } from 'components/controls/RadioButtons';
import { CheckboxGroup } from 'components/controls/Checkbox';
import { InputFile } from 'components/controls/InputFile.js';
import { InputList } from 'components/controls/InputsList';

export const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'inputFile':
      return <InputFile {...rest} />;
    case 'inputList':
      return <InputList {...rest} />;

    default:
      return null;
  }
};
