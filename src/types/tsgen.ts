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

export interface Metadata {
  uid?: string;
}

export interface Checkbox {
  control?: string;
  label?: string;
  input_options: {
    checked?: boolean;
    color?: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';
    disabled?: boolean;
    label_placement?: 'bottom' | 'end' | 'start' | 'top';
    required?: boolean;
    size?: 'small' | 'medium';
    value?: string;
  };
  name?: string;
}

export interface Button {
  control?: string;
  label?: string;
  input_options?: {
    color?:
      | 'default'
      | 'error'
      | 'info'
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning';
    variant?: 'contained' | 'outlined' | 'text';
  };
}

export interface Form {
  /** Label */
  label?: string;
  /** Action */
  action?: string;
  /** Method */
  method?: 'get' | 'post';
  /** Name */
  name?: string;
  /** Control */
  control?: string;
}

export interface Select {
  control?: string;
  label?: string;
  element_options?: {
    auto_width?: boolean;
    default_open?: boolean;
    display_empty?: boolean;
    full_width?: boolean;
    label_id?: string;
    multiple?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
  };
}

export interface Radio {
  control: string;
  label: string;
  name: string;
  element_options: {
    checked?: boolean;
    color?:
      | 'Default'
      | 'Error'
      | 'Info'
      | 'Primary'
      | 'Secondary'
      | 'Success'
      | 'Warning';
    disabled?: boolean;
    label_placement?: 'bottom' | 'end' | 'start' | 'top';
    required?: boolean;
    size?: 'small' | 'medium';
    value?: string;
  };
}

export interface RadioGroup {
  label?: string;
  name?: string;
  control?: string;
}

export interface CheckboxGroup {
  label: string;
  name: string;
  control: string;
}

export interface TextField {
  label: string;
  name?: string;
  element_options: {
    auto_focus?: boolean;
    color?:
      | 'default'
      | 'error'
      | 'info'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'warning';
    disabled?: boolean;
    full_width?: boolean;
    helper_text?: string;
    margin?: 'dense' | 'none';
    max_rows?: number;
    min_rows?: number;
    multiline?: boolean;
    placeholder?: string;
    required?: boolean;
    rows?: number;
    size?: 'medium' | 'small';
    type?:
      | 'date'
      | 'email'
      | 'file'
      | 'password'
      | 'search'
      | 'tel'
      | 'text'
      | 'url';
    value?: string;
    variant?: 'filled' | 'outlined' | 'standard';
  };
  control: string;
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
    | 'default'
    | 'error'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning';
  /** Disabled */
  disabled?: boolean;
  /** Label placement */
  label_placement?: 'bottom' | 'end' | 'start' | 'top';
  /** Required */
  required?: boolean;
  /** Size */
  size?: 'small' | 'medium';
  /** Value */
  value?: string;
}

/** Facilitates content sharing on social media platforms. */
export interface SocialShare {
  /** Social Media Share */
  social_media_share?: {
    /** Title */
    title?: string;
    /** Icon */
    icon?: File;
    /** url */
    url?: Link;
  }[];
}

/** Contains SEO related information such as meta title, meta description, etc. */
export interface Seo {
  /** Meta Title */
  meta_title?: string;
  /** Meta Description */
  meta_description?: string;
  /** Meta Keywords */
  keywords?: string;
  /** Enable Search Indexing */
  enable_search_indexing?: boolean;
}

export interface Subscribe {
  /** Title */
  title: string;
  /** Description */
  description?: string;
  /** Form */
  form: {
    /** Form options */
    form_options: Form;
    /** Username */
    username: TextField;
    /** Password */
    password: TextField;
    /** Full name */
    full_name: TextField;
    /** Dates */
    dates: TextField | TextField[];
    /** Topics */
    topics: {
      /** Container */
      container: CheckboxGroup;
      /** Checkboxes */
      checkboxes: Checkbox | Checkbox[];
    };
    /** Terms */
    terms: Radio;
    /** Submit button */
    submit_button: Button;
  };
}

export interface ContactForm {
  /** Label */
  title: string;
  /** Form */
  form?: {
    /** Text field */
    text_field?: TextField;
    /** Checkbox */
    checkbox?: Checkbox;
  }[];
}

export interface SignupForm {
  /** Title */
  title: string;
  /** Form */
  form?: {
    /** Text field */
    text_field?: TextField;
    /** Radio group */
    radio_group?: {
      /** Container */
      container?: ElementGroup;
      /** Radio */
      radio?: Radio;
    }[];
    /** Checkbox group */
    checkbox_group?: {
      /** Container */
      container?: ElementGroup;
      /** Checkbox */
      checkbox?: Checkbox;
    };
  };
}

export interface Author {
  /** Name */
  title: string;
}

export interface Category {
  /** Title */
  title: string;
  /** Description */
  description?: string;
}

/** Basic blog post */
export interface Post {
  /** Title */
  title: string;
  /** Main image */
  main_image?: File;
  /** Categories */
  categories?: Category[];
  /** Published at */
  published_at: string;
  /** Summary */
  summary?: string;
  /** Body */
  body: any;
  /** Rendered body */
  rendered_body?: string;
  /** Global */
  global_field?: FormControlOptions;
}

export interface Hero {
  /** Heading */
  title: string;
  /** Image */
  image?: File;
  /** Layout */
  layout:
    | 'Top left'
    | 'Top center'
    | 'Top right'
    | 'Center left'
    | 'Center center'
    | 'Center right'
    | 'Bottom left'
    | 'Bottom center'
    | 'Bottom right';
  /** Content */
  content?: string;
  /** CTA */
  cta?: string;
  /** CTA type */
  cta_type?: 'Button' | 'Text';
}
