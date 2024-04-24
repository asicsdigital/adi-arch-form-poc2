import { FormInput, FormOptions } from '../components/dist';

export interface SubscribePageInputs {
  textFields: FormInput[];
  dateFields?: FormInput[];
  topics: FormInput | FormInput[];
  terms: FormInput | FormInput[];
}

export interface SubscribePage {
  description: string;
  form: FormOptions;
  inputs: SubscribePageInputs;
  title: string;
}
