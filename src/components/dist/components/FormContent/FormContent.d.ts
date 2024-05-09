import { FieldValues } from 'react-hook-form';
import { ButtonProps } from '../Button';
import { FlexProps } from '../Flex';
import { FormInput, FormOptions, Styles, Theme } from '../../types';
interface ButtonProp extends ButtonProps {
    label?: string;
    submit?: boolean;
}
export interface ContactFormProps extends FlexProps {
    buttons?: ButtonProp | ButtonProp[];
    defaultValues: Record<string, any>;
    form: Partial<FormOptions>;
    inputs: FormInput[];
    onSubmit: (data: FieldValues) => any;
}
export declare const FormContentClassKey: string;
export type FormContentClasses = 'root';
export declare function FormContentStyles(theme: Theme): Styles;
export declare const FormContentStyle: Styles;
export declare function FormContent(props: ContactFormProps): import("react/jsx-runtime").JSX.Element;
export {};
