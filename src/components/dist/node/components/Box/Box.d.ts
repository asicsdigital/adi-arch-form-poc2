import { BoxProps as MuiBoxProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface BoxProps extends MuiBoxProps {
}
export declare function BoxStyles(theme: Theme): Styles;
export declare const BoxStyle: Styles;
export declare function Box(props: BoxProps): import("react/jsx-runtime").JSX.Element;
