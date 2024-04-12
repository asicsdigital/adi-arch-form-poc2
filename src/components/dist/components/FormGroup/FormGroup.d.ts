import { FormGroupClasses as MuiFormGroupClasses, FormGroupProps as MuiFormGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FormGroupProps extends MuiFormGroupProps {
}
export type FormGroupClasses = Extract<MuiFormGroupClasses, 'root'>;
export declare function FormGroupStyles(theme: Theme): Styles;
export declare const FormGroupStyle: Styles;
export declare function FormGroup(props: FormGroupProps): import("react/jsx-runtime").JSX.Element;
