import { GetStaticProps } from 'next';
import { ContactForm } from '../../components';
import { fetchContact } from '../../lib';
import { ContactPage } from '../../types';
import { Container, Typography } from "@asicsdigital/adi-blocks-core";

export interface ContactProps {
  contactPage: ContactPage;
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: ContactProps;
}> => {
  const contactPage = await fetchContact();
  return {
    props: {
      contactPage
    }
  };
};

export default function Home(props: ContactProps) {
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
