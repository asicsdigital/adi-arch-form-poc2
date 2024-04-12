import { AlertClasses as MuiAlertClasses, AlertProps as MuiAlertProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AlertProps extends MuiAlertProps {
}
export type AlertClasses = Extract<MuiAlertClasses, 'root'>;
export declare function AlertStyles(theme: Theme): Styles;
export declare const AlertStyle: Styles;
export declare function Alert(props: AlertProps): import("react/jsx-runtime").JSX.Element;
