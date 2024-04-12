import { PopperProps as MuiPopperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface PopperProps extends MuiPopperProps {
}
export declare function PopperStyles(theme: Theme): Styles;
export declare const PopperStyle: Styles;
export declare function Popper(props: PopperProps): import("react/jsx-runtime").JSX.Element;
