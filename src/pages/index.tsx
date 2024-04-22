import {
  AppBar,
  Button,
  Container,
  Form,
  FormContent,
  FormInput,
  Toolbar
} from '../components/dist';
import { getData } from '../lib';

const data = getData();

const inputs: FormInput[] = [
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Event date',
      placeholder: '',
      type: 'date'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Email address',
      placeholder: 'yourname@example.com',
      type: 'email'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      type: 'file'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Password',
      type: 'password'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Search',
      type: 'search'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Phone number',
      type: 'tel'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Website URL',
      type: 'url'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Enter some text',
      type: 'text'
    }
  },
  {
    control: 'textField',
    options: {
      fullWidth: true,
      label: 'Enter some more text',
      multiline: true,
      rows: 4,
      type: 'text'
    }
  },
  {
    control: 'select',
    options: {
      fullWidth: true,
      label: 'Select one',
      labelId: 'demo-simple-select-label',
      options: [
        {
          label: 'Option one'
        },
        {
          label: 'Option two'
        },
        {
          label: 'Option three'
        }
      ]
    }
  },
  {
    control: 'checkbox',
    options: {
      label: 'I have read and understand all the things.'
    }
  },
  {
    control: 'radio',
    options: {
      label: 'Select this and commit to something you cannot change'
    }
  },
  {
    control: 'radioGroup',
    options: {
      defaultValue: 'one',
      elements: [
        {
          label: 'Choice 1',
          value: 'one'
        },
        {
          label: 'Choice 2',
          value: 'two'
        },
        {
          label: 'Choice 3',
          value: 'three'
        }
      ],
      label: 'Choose one',
      labelId: 'choose-one',
      name: 'choices'
    }
  }
];

export default function Home() {
  return (
    <>
      <AppBar elevation={0} position="relative">
        <Toolbar>Form POC</Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Form>
          <FormContent inputs={inputs} />
          <Button variant="contained">Submit</Button>
        </Form>
      </Container>
    </>
  );
}
