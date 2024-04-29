import {
  Checkbox,
  CheckboxGroup,
  Radio,
  Subscribe,
  SubscribePage,
  TextField
} from '../../types';
import { arrayify, CheckboxOptions, FormInput } from '../../components/dist';

export async function fetchSubscribe(): Promise<SubscribePage> {
  const url = `${process.env.CS_BASE_URL}/content_types/subscribe/entries?environment=development`;
  const options: RequestInit = {
    headers: {
      access_token: process.env.CS_ACCESS_TOKEN || '',
      api_key: process.env.CS_API_KEY || '',
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(url, options).then((res) => res.json());
  return prepareSubscribePage(res.entries[0]);
}

export function prepareSubscribePage(
  subscribeSource: Subscribe
): SubscribePage {
  const { description, form, title } = subscribeSource;
  const { form_options = {}, ...rest } = form;
  return {
    description: description ? description : '',
    form: {
      ...form_options
    },
    inputs: {
      textFields: [
        prepareTextField(form.username),
        prepareTextField(form.password),
        prepareTextField(form.full_name)
      ],
      dateFields: arrayify(form.dates).map((date) => prepareTextField(date)),
      topics: prepareCheckboxGroup(form.topics),
      terms: prepareRadio(form.terms)
    },
    title: title ? title : 'Subscribe'
  };
}

function prepareCheckboxOptions(checkboxOptions: Checkbox): CheckboxOptions {
  const { label } = checkboxOptions;
  const options = checkboxOptions.input_options;
  const { label_placement, ...rest } = options;
  return {
    ...rest,
    label,
    labelPlacement: label_placement
  };
}

function prepareCheckboxGroup(checkboxGroup: {
  container: CheckboxGroup;
  checkboxes: Checkbox | Checkbox[];
}): FormInput {
  const { container, checkboxes } = checkboxGroup;
  return {
    control: 'checkboxGroup',
    options: {
      elements: arrayify(checkboxes).map((checkbox) => {
        checkbox.name = container.name;
        return prepareCheckboxOptions(checkbox);
      }),
      label: container.label,
      name: container.name
    }
  };
}

function prepareRadio(radio: Radio): FormInput {
  const options = radio.element_options;
  const { label, name } = radio;
  const { label_placement, ...rest } = options;
  return {
    control: 'radio',
    options: {
      ...rest,
      label,
      name
    }
  };
}

function prepareTextField(field: TextField): FormInput {
  const options = field.element_options;
  const { auto_focus, full_width, helper_text, max_rows, min_rows, ...rest } =
    options;
  return {
    control: 'textField',
    options: {
      ...rest,
      autoFocus: auto_focus,
      fullWidth: full_width,
      helperText: helper_text,
      label: field.label,
      maxRows: max_rows,
      minRows: min_rows,
      name: field.name
    }
  };
}
