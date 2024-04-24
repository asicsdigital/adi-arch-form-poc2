import { GetStaticProps } from 'next';
import {
  AppBar,
  Button,
  Container,
  Flex,
  Form,
  FormContent,
  FormInput,
  Toolbar,
  Typography
} from '../components/dist';
import { fetchSubscribe } from '../lib';
import { SubscribePage } from '../types';

export interface HomeProps {
  subscribePage: SubscribePage;
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: HomeProps;
}> => {
  const subscribePage = await fetchSubscribe();
  return {
    props: {
      subscribePage
    }
  };
};

export default function Home(props: HomeProps) {
  const { subscribePage } = props;
  return (
    <>
      <AppBar elevation={0} position="relative">
        <Toolbar>Form POC</Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Typography paragraph variant="h1">
          {subscribePage.title}
        </Typography>
        <Typography paragraph>{subscribePage.description}</Typography>
        <Form {...subscribePage.form}>
          {subscribePage ? (
            <Flex flexDirection="column" gap={8}>
              <FormContent inputs={subscribePage.inputs.textFields} />
              <FormContent
                direction="row"
                inputs={subscribePage.inputs.dateFields}
              />
              <FormContent
                direction="row"
                inputs={subscribePage.inputs.topics}
              />
              <FormContent inputs={subscribePage.inputs.terms} />
            </Flex>
          ) : null}
          <Button variant="contained">Submit</Button>
        </Form>
      </Container>
    </>
  );
}
