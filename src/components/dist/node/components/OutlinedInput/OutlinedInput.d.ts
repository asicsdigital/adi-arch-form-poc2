import { OutlinedInputClasses as MuiOutlinedInputClasses, OutlinedInputProps as MuiOutlinedInputProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface OutlinedInputProps extends MuiOutlinedInputProps {
}
export type OutlinedInputClasses = Extract<MuiOutlinedInputClasses, 'root'>;
export declare function OutlinedInputStyles(theme: Theme): Styles;
export declare const OutlinedInputStyle: Styles;
export declare function OutlinedInput(props: OutlinedInputProps): import("react/jsx-runtime").JSX.Element;
