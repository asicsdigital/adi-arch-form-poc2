import { FormControlLabelClasses as MuiFormControlLabelClasses, FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FormControlLabelProps extends MuiFormControlLabelProps {
}
export type FormControlLabelClasses = Extract<MuiFormControlLabelClasses, 'root'>;
export declare function FormControlLabelStyles(theme: Theme): Styles;
export declare const FormControlLabelStyle: Styles;
export declare function FormControlLabel(props: FormControlLabelProps): import("react/jsx-runtime").JSX.Element;
