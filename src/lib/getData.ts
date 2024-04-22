import { arrayify, FormInput } from '../components/dist';
import { sample } from '../data';

type CSInput = any;

function prepareTextInput(input: CSInput): FormInput {
  const type = input.field_type.toLowerCase();
  return {
    control: 'textField',
    key: input.field_id,
    options: {
      fullWidth: input.fullWidth,
      label: input.field_display_name,
      multiline: type === 'multiline',
      required: input.required,
      rows: input.rows ? input.rows : 4,
      type
    }
  };
}

const prepareInput = {
  date: (input: CSInput): FormInput => {
    return prepareTextInput(input);
  },
  email: (input: CSInput): FormInput => {
    return prepareTextInput(input);
  },
  multiline: (input: CSInput): FormInput => {
    return prepareTextInput(input);
  },
  radio: (input: CSInput): FormInput => {
    const entryValues = arrayify(input.entry_values);
    const elements = entryValues.map((value) => ({
      key: value._metadata.uid,
      label: value.value_display,
      value: value.value_id
    }));
    return {
      control: 'radioGroup',
      key: input.field_id,
      options: {
        elements,
        label: input.display_name,
        name: input.display_name
      }
    };
  },
  select: (input: CSInput): FormInput => {
    return {
      control: 'select',
      key: input.field_id,
      options: {
        options: input.entry_values.map((value: any) => ({
          id: value.id,
          label: value.value_display,
          value: value.value ? value.value : value.value_display
        })),
        required: input.required
      }
    };
  },
  tel: (input: CSInput): FormInput => {
    return prepareTextInput(input);
  },
  text: (input: CSInput): FormInput => {
    return prepareTextInput(input);
  }
};

export function getData() {
  const keys: string[] = Object.keys(sample);
  const inputs = keys.filter(
    (key: string) => sample[key].field_type !== undefined
  );
  return sample;
}
