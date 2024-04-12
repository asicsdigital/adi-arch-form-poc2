import { SnackbarContentClasses as MuiSnackbarContentClasses, SnackbarContentProps as MuiSnackbarContentProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SnackbarContentProps extends MuiSnackbarContentProps {
}
export type SnackbarContentClasses = Extract<MuiSnackbarContentClasses, 'root'>;
export declare function SnackbarContentStyles(theme: Theme): Styles;
export declare const SnackbarContentStyle: Styles;
export declare function SnackbarContent(props: SnackbarContentProps): import("react/jsx-runtime").JSX.Element;
