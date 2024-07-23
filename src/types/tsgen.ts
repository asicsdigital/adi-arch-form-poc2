import {
  InputControlKeys,
  FormContentProps,
} from "@asicsdigital/adi-blocks-core";

export interface File {
  uid: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  tags: string[];
  filename: string;
  url: string;
  ACL: any[];
  is_dir: boolean;
  parent_uid: string;
  _version: number;
  title: string;
  publish_details: {
    environment: string;
    locale: string;
    time: string;
    user: string;
  };
}

export interface Link {
  title: string;
  href: string;
}

export interface CheckboxBasic {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Checked */
  checked?: boolean;
  /** Required */
  required?: boolean;
  /** Value */
  value?: string;
  /** Control */
  control: InputControlKeys;
}

export interface Checkbox {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Options */
  input_options?: {
    /** Checked */
    checked?: boolean;
    /** Color */
    color?:
      | "default"
      | "error"
      | "info"
      | "primary"
      | "secondary"
      | "success"
      | "warning";
    /** Disabled */
    disabled?: boolean;
    /** Label placement */
    label_placement?: "bottom" | "end" | "start" | "top";
    /** Required */
    required?: boolean;
    /** Size */
    size?: "small" | "medium";
    /** Value */
    value?: string;
  };
  /** Control */
  control: InputControlKeys;
}

export interface Textfield {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Type */
  type?:
    | "date"
    | "email"
    | "file"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";
  /** Required */
  required?: boolean;
  /** Helper text */
  helper_text?: string;
  /** Placeholder */
  placeholder?: string;
  /** Multiline */
  multiline?: boolean;
  /** Rows */
  rows?: number;
  /** Full width */
  full_width?: boolean;
  /** Control */
  control: InputControlKeys;
}

export interface TextField {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Options */
  element_options?: {
    /** Auto focus */
    auto_focus?: boolean;
    /** Color */
    color?: "error" | "info" | "primary" | "secondary" | "success" | "warning";
    /** Disabled */
    disabled?: boolean;
    /** Full width */
    full_width?: boolean;
    /** Helper text */
    helper_text?: string;
    /** Margin */
    margin?: "dense" | "none";
    /** Max rows */
    max_rows?: number;
    /** Min rows */
    min_rows?: number;
    /** Multiline */
    multiline?: boolean;
    /** Placeholder */
    placeholder?: string;
    /** Required */
    required?: boolean;
    /** Rows */
    rows?: number;
    /** Size */
    size?: "medium" | "small";
    /** Type */
    type?:
      | "date"
      | "email"
      | "file"
      | "password"
      | "search"
      | "tel"
      | "text"
      | "url";
    /** Value */
    value?: string;
    /** Variant */
    variant?: "filled" | "outlined" | "standard";
  };
  /** Control */
  control: InputControlKeys;
}

export interface Select {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Choices */
  choices?: {
    /** Label */
    label?: string;
    /** Value */
    value?: string;
  }[];
  /** Options */
  element_options?: {
    /** Auto width */
    auto_width?: boolean;
    /** Default open */
    default_open?: boolean;
    /** Display empty */
    display_empty?: boolean;
    /** Full width */
    full_width?: boolean;
    /** Label ID */
    label_id?: string;
    /** Multiple */
    multiple?: boolean;
    /** Variant */
    variant?: "filled" | "outlined" | "standard";
  };
  /** Control */
  control: InputControlKeys;
}

export interface Radio {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Options */
  element_options?: {
    /** Checked */
    checked?: boolean;
    /** Color */
    color?:
      | "default"
      | "error"
      | "info"
      | "primary"
      | "secondary"
      | "success"
      | "warning";
    /** Disabled */
    disabled?: boolean;
    /** Label placement */
    label_placement?: "bottom" | "end" | "start" | "top";
    /** Required */
    required?: boolean;
    /** Size */
    size?: "small" | "medium";
    /** Value */
    value?: string;
  };
  /** Control */
  control: InputControlKeys;
}

export interface CheckboxOptions {
  /** Checked */
  checked?: boolean;
  /** Color */
  color?:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  /** Disabled */
  disabled?: boolean;
  /** Label placement */
  label_placement?: "bottom" | "end" | "start" | "top";
  /** Required */
  required?: boolean;
  /** Size */
  size?: "small" | "medium";
  /** Value */
  value?: string;
  /** Control */
  control: InputControlKeys;
}

export interface Button {
  /** Label */
  label?: string;
  /** Options */
  input_options?: {
    /** Color */
    color?:
      | "default"
      | "error"
      | "info"
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "warning";
    /** Variant */
    variant?: "contained" | "outlined" | "text";
  };
  /** Control */
  control?: InputControlKeys;
}

export interface Form {
  /** Label */
  label?: string;
  /** Action */
  action?: string;
  /** Method */
  method?: "get" | "post";
  /** Name */
  name?: string;
  /** Control */
  control?: InputControlKeys;
}

export interface RadioGroup {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Control */
  control?: InputControlKeys;
}

export interface CheckboxGroup {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
  /** Control */
  control?: InputControlKeys;
}

export interface ElementGroup {
  /** Label */
  label?: string;
  /** Name */
  name?: string;
}

/** The basic options for form inputs. */
export interface FormControlOptions {
  /** Checked */
  checked?: boolean;
  /** Color */
  color?:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning";
  /** Disabled */
  disabled?: boolean;
  /** Label placement */
  label_placement?: "bottom" | "end" | "start" | "top";
  /** Required */
  required?: boolean;
  /** Size */
  size?: "small" | "medium";
  /** Value */
  value?: string;
}

export interface TextFieldOptions {}

export interface FormExampleWithRegex {
  /** Title */
  title: string;
  /** Customer form */
  customer_form?: {
    /** Form */
    form?: Form;
    /** Username */
    username?: {
      /** Label */
      label?: string;
      /** Options */
      element_options?: TextFieldOptions;
      /** Password */
      password?: {
        /** Label */
        label?: string;
        /** Options */
        element_options?: TextFieldOptions;
      };
    };
  };
}

export interface ContactForm {
  /** Title */
  header: string;
  /** Description */
  description: string;
  /** Name */
  name: Textfield;
  /** Email */
  email: Textfield;
  /** Subject */
  select_subject: Select;
  /** Order Number */
  order_number: TextField;
  /** Phone Number */
  phone_number: TextField;
  /** Message */
  message: TextField;
  submit: FormContentProps["buttons"];
  [key: string]:
    | CheckboxBasic
    | Select
    | Textfield
    | FormContentProps["buttons"]
    | string;
}
