import { GetStaticProps } from 'next';
import { Container, Typography } from '../../components/dist';
import { WarrantyForm } from '../../components';
import { fetchContact } from '../../lib';
import { WarrantyPage } from '../../types';

export interface WarrantyProps {
    warrantyPage: WarrantyPage;
}

export const getStaticProps: GetStaticProps = async (): Promise<{props: WarrantyProps;}> => {
    const warrantyPage = await fetchContact();
    return {
        props: {
            warrantyPage
        }
    };
};
  
export default function Warranty(props: WarrantyProps) {
    const { warrantyPage } = props;
    const { form, inputs, title } = warrantyPage;

    return (
        <>
            <Container sx={{ mt: 12 }}>
                <Typography paragraph variant="h1">
                    Warranty
                </Typography>
                <WarrantyForm form={form} inputs={inputs} />
            </Container>
        </>
    );
}