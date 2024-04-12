import { DialogClasses as MuiDialogClasses, DialogProps as MuiDialogProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DialogProps extends MuiDialogProps {
}
export type DialogClasses = Extract<MuiDialogClasses, 'root'>;
export declare function DialogStyles(theme: Theme): Styles;
export declare const DialogStyle: Styles;
export declare function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
