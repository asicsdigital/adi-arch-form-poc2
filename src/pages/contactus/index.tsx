import { GetStaticProps } from "next";
import { Container, Typography } from "@asicsdigital/adi-blocks-core";
import { ContactForm } from "../../components";
import { fetchContact } from "../../lib";
import { ContactPage } from "../../types";

export interface ContactProps {
  contactPage: ContactPage;
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: ContactProps;
}> => {
  const contactPage = await fetchContact();
  return {
    props: {
      contactPage,
    },
  };
};

export default function Home(props: ContactProps) {
  const { contactPage } = props;
  const { description, inputs, header, button } = contactPage;

  return (
    <Container sx={{ mt: 12 }}>
      <Typography paragraph variant="h1">
        {header}
      </Typography>
      <Typography paragraph>{description}</Typography>
      <ContactForm inputs={inputs} button={button} />
    </Container>
  );
}
