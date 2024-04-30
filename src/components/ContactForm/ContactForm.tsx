import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  Flex,
  Form,
  FormOptions,
  FormInput,
  InputControlKeys,
  TextField
} from '../../components/dist';

interface ContactFormProps {
  form: Partial<FormOptions>;
  inputs: FormInput[];
}

type CreateInput = {
  [key in InputControlKeys]: (input: FormInput) => React.ReactNode;
};

export function ContactForm(props: ContactFormProps) {
  const { form, inputs } = props;
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  const createInput: CreateInput = {
    checkbox: (input: FormInput): React.ReactNode => {
      return <>checkbox</>;
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
      return <TextField rhfControl={control} {...input.options} />;
    }
  };

  return (
    <>
      <Form {...form}>
        <Flex flexDirection="column">
          {inputs.map((input: FormInput) => createInput[input.control](input))}
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Submit
          </Button>
        </Flex>
      </Form>
    </>
  );
}
