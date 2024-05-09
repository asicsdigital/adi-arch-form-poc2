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
  name: string;
  email: string;
  subject: string;
  description: string;
  terms: boolean;
}

const contactFormDefaults: ContactFormInput = {
  name: '',
  email: '',
  subject: '',
  description: '',
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
