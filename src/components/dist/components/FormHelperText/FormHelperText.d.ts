import { FormHelperTextClasses as MuiFormHelperTextClasses, FormHelperTextProps as MuiFormHelperTextProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FormHelperTextProps extends MuiFormHelperTextProps {
}
export type FormHelperTextClasses = Extract<MuiFormHelperTextClasses, 'root'>;
export declare function FormHelperTextStyles(theme: Theme): Styles;
export declare const FormHelperTextStyle: Styles;
export declare function FormHelperText(props: FormHelperTextProps): import("react/jsx-runtime").JSX.Element;
