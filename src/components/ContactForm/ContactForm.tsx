import React from 'react';
import { FieldValues } from 'react-hook-form';
import {
  Form,
  FormContent,
  FormInput,
  FormOptions
} from '../../components/dist';

interface ContactFormProps {
  form: Partial<FormOptions>;
  inputs: FormInput[];
}

interface ContactFormInput {
  description: string;
  email: string;
  location: string;
  name: string;
  signup: string;
  subject: string;
  terms: boolean;
}

const contactFormDefaults: ContactFormInput = {
  description: '',
  email: '',
  location: '',
  name: '',
  signup: '',
  subject: '',
  terms: true
};

export function ContactForm(props: ContactFormProps) {
  const { form, inputs } = props;
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Form {...form}>
      <FormContent
        defaultValues={contactFormDefaults}
        inputs={inputs}
        onSubmit={onSubmit}
      />
    </Form>
  );
}
