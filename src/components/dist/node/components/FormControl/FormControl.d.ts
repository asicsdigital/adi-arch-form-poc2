import { FormControlClasses as MuiFormControlClasses, FormControlProps as MuiFormControlProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FormControlProps extends MuiFormControlProps {
}
export type FormControlClasses = Extract<MuiFormControlClasses, 'root'>;
export declare function FormControlStyles(theme: Theme): Styles;
export declare const FormControlStyle: Styles;
export declare function FormControl(props: FormControlProps): import("react/jsx-runtime").JSX.Element;
