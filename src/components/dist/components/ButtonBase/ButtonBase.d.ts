import { ButtonBaseClasses as MuiButtonBaseClasses, ButtonBaseProps as MuiButtonBaseProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ButtonBaseProps extends MuiButtonBaseProps {
}
export type ButtonBaseClasses = Extract<MuiButtonBaseClasses, 'root'>;
export declare function ButtonBaseStyles(theme: Theme): Styles;
export declare const ButtonBaseStyle: Styles;
export declare function ButtonBase(props: ButtonBaseProps): import("react/jsx-runtime").JSX.Element;
