import { GetStaticProps } from 'next';
import { Container, Typography } from '../components/dist';
import { ContactForm } from '../components';
import { fetchContact } from '../lib';
import { ContactPage } from '../types';

export interface HomeProps {
  contactPage: ContactPage;
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: HomeProps;
}> => {
  const contactPage = await fetchContact();
  return {
    props: {
      contactPage
    }
  };
};

export default function Home(props: HomeProps) {
  const { contactPage } = props;
  const { description, form, inputs, title } = contactPage;

  return (
    <>
      <Container sx={{ mt: 12 }}>
        <Typography paragraph variant="h1">
          {title}
        </Typography>
        <Typography paragraph>{description}</Typography>
        <ContactForm form={form} inputs={inputs} />
      </Container>
    </>
  );
}
