import {
  CheckboxBasic,
  ContactForm,
  ContactPage,
  Radio,
  Select,
  Textfield,
} from "../../types";
import { FieldValues } from "react-hook-form";

import {
  FormInput,
  FormContentProps,
  fromSnakeToCamel,
} from "@asicsdigital/adi-blocks-core";

export async function fetchContact(): Promise<ContactPage> {
  const url = `${process.env.CS_BASE_URL}/content_types/contact_us_ana/entries?environment=dev_asics-develop`;
  const options: RequestInit = {
    headers: {
      access_token: process.env.CS_ACCESS_TOKEN || "",
      api_key: process.env.CS_API_KEY || "",
      "Content-Type": "application/json",
    },
  };

  const res = await fetch(url, options).then((res) => res.json());
  return prepareContactPage(res.entries[0]);
}

export function prepareContactPage(contactForm: ContactForm): ContactPage {
  const { description, header, submit } = contactForm;
  const preparedInputs: FormInput[] = [];
  const button: FormContentProps["buttons"] = submit;

  const inputNames = [
    "select_subject",
    "name",
    "email",
    "order_number",
    "phone_number",
    "message",
  ];

  inputNames.forEach((name) => {
    const input = contactForm[name];
    if (input && typeof input !== 'string' && 'control' in input) {
      const preparedInput = prepareInput(input);
      preparedInputs.push(preparedInput);
    }
  });

  return { description, inputs: preparedInputs, header, button };
}

function prepareInput(
  input: CheckboxBasic | Radio | Select | Textfield
): FormInput {
  const { control, ...options } = input;
  let preparedOptions: Record<string, unknown> = {};
  const inputKeys = Object.keys(options);

  inputKeys.forEach((inputKey) => {
    const key = inputKey as keyof typeof options;
    const newKey = fromSnakeToCamel(key);
    preparedOptions[newKey] = options[key];
  });

  const requiredMessage = "This field is required."; //Place holder code(will be removed by I18 code in main app)

  const updatedObject = {
    fullWidth: true,
    requiredMessage,
  };

  preparedOptions = {
    ...preparedOptions,
    ...updatedObject,
  };
  return { control, options: preparedOptions };
}

export async function postContactData(data: FieldValues): Promise<any> {
  const finalPayload = JSON.stringify(data);

  try {
    const response = await fetch("/api/sfcc/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: finalPayload,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to post contact data:", error);
    throw error;
  }
}
