import { DialogContentClasses as MuiDialogContentClasses, DialogContentProps as MuiDialogContentProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DialogContentProps extends MuiDialogContentProps {
}
export type DialogContentClasses = Extract<MuiDialogContentClasses, 'root'>;
export declare function DialogContentStyles(theme: Theme): Styles;
export declare const DialogContentStyle: Styles;
export declare function DialogContent(props: DialogContentProps): import("react/jsx-runtime").JSX.Element;
