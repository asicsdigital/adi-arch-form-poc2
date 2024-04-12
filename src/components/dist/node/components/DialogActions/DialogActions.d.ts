import { DialogActionsClasses as MuiDialogActionsClasses, DialogActionsProps as MuiDialogActionsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DialogActionsProps extends MuiDialogActionsProps {
}
export type DialogActionsClasses = Extract<MuiDialogActionsClasses, 'root'>;
export declare function DialogActionsStyles(theme: Theme): Styles;
export declare const DialogActionsStyle: Styles;
export declare function DialogActions(props: DialogActionsProps): import("react/jsx-runtime").JSX.Element;
