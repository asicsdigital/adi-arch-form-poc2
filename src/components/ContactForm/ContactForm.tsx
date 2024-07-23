import React, { useState, useMemo } from "react";
import {
  Form,
  FormContent,
  FormInput,
  Typography,
  FormContentProps,
} from "@asicsdigital/adi-blocks-core";

import { useContactForm } from "../../hooks";
import Recaptcha from "../Recaptcha/Recaptcha";

interface ContactFormProps {
  inputs: FormInput[];
  button: FormContentProps["buttons"];
}

interface ContactFormInput {
  suppliedname: string;
  suppliedemail: string;
  suppliedphone: string;
  ordernumber: string;
  description: string;
  subject: string;
}

export function ContactForm(props: ContactFormProps) {
  const { inputs, button } = props;
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const { message, onSubmit } = useContactForm(captchaToken);

  const contactFormDefaults: ContactFormInput = {
    suppliedname: "",
    suppliedemail: "",
    suppliedphone: "",
    ordernumber: "",
    description: "",
    subject: "",
  };

  const handleCaptchaTokenChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  // Modify the button props to include a disabled state based on captcha validation
  const modifiedButtonProps: FormContentProps["buttons"] = useMemo(
    () => ({
      ...button,
      disabled: !captchaToken, // Button is disabled if captchaToken is null
    }),
    [captchaToken, button]
  );

  // const onError = (errors) => console.log(errors);
  
  return (
    <Form>
      <FormContent
        defaultValues={contactFormDefaults}
        inputs={inputs}
        // onError={onError}
        onSubmit={onSubmit}
      />
      <Recaptcha onChange={handleCaptchaTokenChange} />
      <Typography paragraph>{message}</Typography>
      <FormContent
        defaultValues={contactFormDefaults}
        inputs={inputs.slice(inputs.length)}
        buttons={modifiedButtonProps}
        // onError={onError}
        onSubmit={onSubmit}
      />
    </Form>
  );
}
