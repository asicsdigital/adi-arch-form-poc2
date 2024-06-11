import React, { useState } from 'react';
import {
  Form,
  FormContent,
  FormInput,
  FormOptions
} from '../../components/dist';

import useContactForm  from './useContactForm';

import RecaptchaComponent from '../Recaptcha/Recaptcha';

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
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { isLoading, message, onSubmit } = useContactForm(captchaToken);

  const handleCaptchaTokenChange = (token: string | null) => {
    setCaptchaToken(token);
  }

  return (
    <>
      <Form {...form}>
        <FormContent
          defaultValues={contactFormDefaults}
          inputs={inputs}
          onSubmit={onSubmit}
        />
      </Form>
      {isLoading && <p>Loading...</p>}
      <br />
      {message && <p>{message}</p>}
      <br />
      <RecaptchaComponent onChange={handleCaptchaTokenChange} />
      <></>
      <br/>
    </>
  );
}
