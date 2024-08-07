import React, { useState, useEffect, useMemo } from "react";
import {
  Form,
  FormContent,
  FormInput,
  Typography,
  FormContentProps,
  useForm
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

  const { watch } = useForm(contactFormDefaults);

  useEffect(() => {
    const subscription = watch((currentDatabject, data) => {
        if(data.name === 'subject' && data.type === 'change' ) {
          if(currentDatabject.subject === 'Order Status') {
            console.log('The Value', currentDatabject);
          }
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [watch])


  const handleCaptchaTokenChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const inp : FormInput[] = [
    {
      "control": "select",
      "options": {
        "label": "Select Subject",
        "name": "subject",
        "required": true,
        "placeholder": "Select Subject",
        "choices": [
          {
            "label": "Product Questions",
            "value": "Product Questions"
          },
          {
            "label": "Warranty & Defective Items",
            "value": "Warranty & Defective Items"
          },
          {
            "label": "Order Status",
            "value": "Order Status"
          },
          {
            "label": "Returns",
            "value": "Returns"
          },
          {
            "label": "My Account",
            "value": "My Account"
          },
          {
            "label": "Remove from Mailing List",
            "value": "Remove from Mailing List"
          },
          {
            "label": "Team Sales",
            "value": "Team Sales"
          },
          {
            "label": "Charity Donations & Sponsorships",
            "value": "Charity Donations & Sponsorships"
          }
        ],
        "fullWidth": true,
        "requiredMessage": "This field is required."
      }
    },
    {
      "control": "textField",
      "options": {
        "label": "Name",
        "name": "suppliedname",
        "placeholder": "",
        "type": "text",
        "multiline": false,
        "required": true,
        "helperText": "",
        "fullWidth": true,
        "requiredMessage": "This field is required."
      }
    },
    {
      "control": "textField",
      "options": {
        "label": "Email Address (If you placed an order, please use the email address associated with your order)",
        "name": "suppliedemail",
        "placeholder": "",
        "type": "email",
        "multiline": false,
        "required": true,
        "helperText": "",
        "fullWidth": true,
        "requiredMessage": "This field is required."
      }
    },
    {
      "control": "textField",
      "options": {
        "label": "Order Number (If applicable)",
        "name": "ordernumber",
        "placeholder": "",
        "type": "text",
        "multiline": false,
        "required": false,
        "helperText": "",
        "fullWidth": true,
        "requiredMessage": "This field is required."
      }
    },
    {
      "control": "textField",
      "options": {
        "label": "Phone Number",
        "name": "suppliedphone",
        "placeholder": "",
        "type": "tel",
        "multiline": false,
        "required": true,
        "helperText": "",
        "fullWidth": true,
        "requiredMessage": "This field is required."
      }
    },
    {
      "control": "textField",
      "options": {
        "label": "Message",
        "name": "description",
        "placeholder": "",
        "type": "text",
        "multiline": true,
        "required": true,
        "helperText": "",
        "fullWidth": true,
        "requiredMessage": "This field is required."
      }
    }
  ];


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
        inputs={inp}
        // onError={onError}
        onSubmit={onSubmit}
      />
      <Recaptcha onChange={handleCaptchaTokenChange} />
      <Typography paragraph>{message}</Typography>
      <FormContent
        defaultValues={contactFormDefaults}
        inputs={inp.slice(inp.length)}
        buttons={modifiedButtonProps}
        // onError={onError}
        onSubmit={onSubmit}
      />
    </Form>
  );
}
