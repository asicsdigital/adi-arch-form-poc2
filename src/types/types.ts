export type PaletteColorRole =
  | 'error'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';

export type LabelPlacement = 'bottom' | 'end' | 'start' | 'top';

export const InputControls = {
  Checkbox: 'checkbox',
  Switch: 'switch',
  Radio: 'radio',
  RadioGroup: 'radioGroup',
  TextField: 'textField'
} as const;

export type InputControlKeys =
  (typeof InputControls)[keyof typeof InputControls];

export type InputControlOptions =
  | CheckboxOptions
  | RadioOptions
  | RadioGroupOptions
  | SwitchOptions
  | TextFieldOptions;

export interface FormControlBaseOptions {
  checked?: boolean;
  checkedIcon?: React.ReactNode;
  color?: PaletteColorRole;
  disabled?: boolean;
  icon?: React.ReactNode;
  label?: string;
  labelPlacement?: LabelPlacement;
  required?: boolean;
  size?: 'small' | 'medium';
  value?: string;
}

export interface CheckboxOptions extends FormControlBaseOptions {}

export interface RadioOptions extends FormControlBaseOptions {
  name?: string;
}

export interface RadioGroupOptions {
  elements: RadioOptions | RadioOptions[];
  name?: string;
}

export interface SwitchOptions extends FormControlBaseOptions {
  edge?: 'end' | 'start' | false;
}

export type TextFieldTypes =
  | 'email'
  | 'file'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export interface TextFieldOptions {
  autoFocus?: boolean;
  color?: PaletteColorRole;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  label?: React.ReactNode | string;
  margin?: 'dense' | 'none' | 'normal';
  maxRows?: number | string;
  minRows?: number | string;
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number | string;
  size?: 'medium' | 'small';
  type?: TextFieldTypes;
  value?: string;
  variant?: 'filled' | 'outlined' | 'standard';
}

export interface FormInput {
  control: InputControlKeys;
  key?: string;
  options?: InputControlOptions;
}

export interface FormOptions {
  action?: string;
  inputs?: FormInput | FormInput[];
  method?: 'get' | 'post';
  name?: string;
}

export interface FormContentOptions {
  inputs?: FormInput | FormInput[];
}
