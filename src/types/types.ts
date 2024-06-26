import {
  FormInput,
  FormContentProps,
} from "@asicsdigital/adi-blocks-core";

export interface ContactPage {
  description: string;
  inputs: FormInput[];
  header: string;
  button: FormContentProps["buttons"];
}

export interface WarrantyPage {
  description: string;
  form: FormOptions;
  inputs: FormInput[];
  title: string;
}
