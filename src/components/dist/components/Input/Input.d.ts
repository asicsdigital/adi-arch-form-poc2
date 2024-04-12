import { InputClasses as MuiInputClasses, InputProps as MuiInputProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface InputProps extends MuiInputProps {
}
export type InputClasses = Extract<MuiInputClasses, 'root'>;
export declare function InputStyles(theme: Theme): Styles;
export declare const InputStyle: Styles;
export declare function Input(props: InputProps): import("react/jsx-runtime").JSX.Element;
