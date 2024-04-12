import { FormLabelClasses as MuiFormLabelClasses, FormLabelProps as MuiFormLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FormLabelProps extends MuiFormLabelProps {
}
export type FormLabelClasses = Extract<MuiFormLabelClasses, 'root'>;
export declare function FormLabelStyles(theme: Theme): Styles;
export declare const FormLabelStyle: Styles;
export declare function FormLabel(props: FormLabelProps): import("react/jsx-runtime").JSX.Element;
