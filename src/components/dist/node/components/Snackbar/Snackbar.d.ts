import { SnackbarClasses as MuiSnackbarClasses, SnackbarProps as MuiSnackbarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SnackbarProps extends MuiSnackbarProps {
}
export type SnackbarClasses = Extract<MuiSnackbarClasses, 'root'>;
export declare function SnackbarStyles(theme: Theme): Styles;
export declare const SnackbarStyle: Styles;
export declare function Snackbar(props: SnackbarProps): import("react/jsx-runtime").JSX.Element;
