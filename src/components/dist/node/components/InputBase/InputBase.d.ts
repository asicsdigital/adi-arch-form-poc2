import { InputBaseClasses as MuiInputBaseClasses, InputBaseProps as MuiInputBaseProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface InputBaseProps extends MuiInputBaseProps {
}
export type InputBaseClasses = Extract<MuiInputBaseClasses, 'root'>;
export declare function InputBaseStyles(theme: Theme): Styles;
export declare const InputBaseStyle: Styles;
export declare function InputBase(props: InputBaseProps): import("react/jsx-runtime").JSX.Element;
