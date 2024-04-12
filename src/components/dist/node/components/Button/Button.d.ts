import { ButtonClasses as MuiButtonClasses, ButtonProps as MuiButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ButtonProps extends MuiButtonProps {
}
export type ButtonClasses = Extract<MuiButtonClasses, 'root'>;
export declare function ButtonStyles(theme: Theme): Styles;
export declare const ButtonStyle: Styles;
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
