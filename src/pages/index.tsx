import { GetStaticProps } from 'next';
import { FieldValues, useForm } from 'react-hook-form';
import {
  Button,
  Checkbox,
  Container,
  Flex,
  Form,
  FormControlLabel,
  FormContent,
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
  const { handleSubmit, control } = useForm({});

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <Container sx={{ mt: 12 }}>
        <Typography paragraph variant="h1">
          {subscribePage.title}
        </Typography>
        <Typography paragraph>{subscribePage.description}</Typography>
        <Form {...subscribePage.form}>
          {subscribePage ? (
            <Flex flexDirection="column" gap={8}>
              <FormContent
                inputs={subscribePage.inputs.textFields}
                rhfControl={control}
              />
              <FormContent
                direction="row"
                inputs={subscribePage.inputs.dateFields}
                rhfControl={control}
              />
              <FormContent
                direction="row"
                inputs={subscribePage.inputs.topics}
                rhfControl={control}
              />
              <FormContent
                inputs={subscribePage.inputs.terms}
                rhfControl={control}
              />
            </Flex>
          ) : null}
          <FormControlLabel
            control={<Checkbox rhfControl={control} name="testingBox" />}
            label="Checkbox group"
          />
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
