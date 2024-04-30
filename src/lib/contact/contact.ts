import { ContactForm, ContactPage } from '../../types';
import {
  FormInput,
  InputControlOptions,
  fromSnakeToCamel
} from '../../components/dist';

export async function fetchContact(): Promise<ContactPage> {
  const url = `${process.env.CS_BASE_URL}/content_types/contact_form/entries?environment=development`;
  const options: RequestInit = {
    headers: {
      access_token: process.env.CS_ACCESS_TOKEN || '',
      api_key: process.env.CS_API_KEY || '',
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(url, options).then((res) => res.json());
  return prepareContactPage(res.entries[0]);
}

export function prepareContactPage(contactForm: ContactForm): ContactPage {
  const { description, form, title } = contactForm;
  const { container, inputs } = form;
  const inputsSource = Object.values(inputs);
  const preparedInputs: FormInput[] = inputsSource.map((input) => {
    const { control, ...options } = input;
    return { control, options };
  });

  return { description, form: container, inputs: preparedInputs, title };
}
