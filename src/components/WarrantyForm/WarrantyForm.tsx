import React, { useState } from 'react';
import { 
  Form, 
  FormContent, 
  FormInput, 
  FormOptions 
} from '../../components/dist';

import useWarrantyForm from './useWarrantyForm';
import RecaptchaComponent from '../Recaptcha/Recaptcha';

interface WarrantyFormProps {
  form: Partial<FormOptions>;
  inputs: FormInput[];
}

interface WarrantyFormInput {
  description: string;
  email: string;
  location: string;
  name: string;
  signup: string;
  subject: string;
  terms: boolean;
}

const warrantyFormDefaults: WarrantyFormInput = {
  description: '',
  email: '',
  location: '',
  name: '',
  signup: '',
  subject: '',
  terms: true
};

export function WarrantyForm(props: WarrantyFormProps) {
  const { form, inputs } = props;
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { isLoading, message, onSubmit } = useWarrantyForm(captchaToken);

  const handleCaptchaTokenChange = (token: string | null) => {
    setCaptchaToken(token);
  }
  
  return (
    <>
      <Form {...form}>
        <FormContent
          defaultValues={warrantyFormDefaults}
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