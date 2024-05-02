import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  Checkbox,
  Flex,
  Form,
  FormControlLabel,
  FormOptions,
  FormInput,
  InputControlKeys,
  TextField
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

type CreateInput = {
  [key in InputControlKeys]: (input: FormInput) => React.ReactNode;
};

export function ContactForm(props: ContactFormProps) {
  const { form, inputs } = props;
  const {
    handleSubmit,
    control: rhfControl,
    setValue
  } = useForm<ContactFormInput>({
    defaultValues: contactFormDefaults
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  const createInput: CreateInput = {
    checkbox: (input: FormInput): React.ReactNode => {
      const { control, options } = input;
      return (
        <FormControlLabel
          control={
            <Checkbox
              key={control}
              setValue={setValue}
              rhfControl={rhfControl}
            />
          }
          key={options?.label}
          label={options?.label}
        />
      );
    },
    checkboxGroup: (input: FormInput): React.ReactNode => {
      return <>checkboxGroup</>;
    },
    radio: (input: FormInput): React.ReactNode => {
      return <>radio</>;
    },
    radioGroup: (input: FormInput): React.ReactNode => {
      return <>radioGroup</>;
    },
    switch: (input: FormInput): React.ReactNode => {
      return <>switch</>;
    },
    select: (input: FormInput): React.ReactNode => {
      return <>select</>;
    },
    textField: (input: FormInput): React.ReactNode => {
      return (
        <TextField
          key={input.options?.label}
          rhfControl={rhfControl}
          {...input.options}
        />
      );
    }
  };

  return (
    <>
      <Form {...form}>
        <Flex alignItems="flexStart" flexDirection="column" gap={8}>
          {inputs.map((input: FormInput) => createInput[input.control](input))}
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Submit
          </Button>
        </Flex>
      </Form>
    </>
  );
}
