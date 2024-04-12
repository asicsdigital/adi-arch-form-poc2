import { AlertTitleClasses as MuiAlertTitleClasses, AlertTitleProps as MuiAlertTitleProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AlertTitleProps extends MuiAlertTitleProps {
}
export type AlertTitleClasses = Extract<MuiAlertTitleClasses, 'root'>;
export declare function AlertTitleStyles(theme: Theme): Styles;
export declare const AlertTitleStyle: Styles;
export declare function AlertTitle(props: AlertTitleProps): import("react/jsx-runtime").JSX.Element;
