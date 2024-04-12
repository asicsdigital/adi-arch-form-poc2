import { InputAdornmentClasses as MuiInputAdornmentClasses, InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface InputAdornmentProps extends MuiInputAdornmentProps {
}
export type InputAdornmentClasses = Extract<MuiInputAdornmentClasses, 'root'>;
export declare function InputAdornmentStyles(theme: Theme): Styles;
export declare const InputAdornmentStyle: Styles;
export declare function InputAdornment(props: InputAdornmentProps): import("react/jsx-runtime").JSX.Element;
