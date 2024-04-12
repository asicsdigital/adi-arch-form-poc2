import { BackdropClasses as MuiBackdropClasses, BackdropProps as MuiBackdropProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface BackdropProps extends MuiBackdropProps {
}
export type BackdropClasses = Extract<MuiBackdropClasses, 'root'>;
export declare function BackdropStyles(theme: Theme): Styles;
export declare const BackdropStyle: Styles;
export declare function Backdrop(props: BackdropProps): import("react/jsx-runtime").JSX.Element;
