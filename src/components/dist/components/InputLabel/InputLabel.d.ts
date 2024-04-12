import { InputLabelClasses as MuiInputLabelClasses, InputLabelProps as MuiInputLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface InputLabelProps extends MuiInputLabelProps {
}
export type InputLabelClasses = Extract<MuiInputLabelClasses, 'root'>;
export declare function InputLabelStyles(theme: Theme): Styles;
export declare const InputLabelStyle: Styles;
export declare function InputLabel(props: InputLabelProps): import("react/jsx-runtime").JSX.Element;
