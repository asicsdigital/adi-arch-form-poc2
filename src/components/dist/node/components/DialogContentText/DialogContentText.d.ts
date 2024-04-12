import { DialogContentTextClasses as MuiDialogContentTextClasses, DialogContentTextProps as MuiDialogContentTextProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DialogContentTextProps extends MuiDialogContentTextProps {
}
export type DialogContentTextClasses = Extract<MuiDialogContentTextClasses, 'root'>;
export declare function DialogContentTextStyles(theme: Theme): Styles;
export declare const DialogContentTextStyle: Styles;
export declare function DialogContentText(props: DialogContentTextProps): import("react/jsx-runtime").JSX.Element;
