import { DialogTitleClasses as MuiDialogTitleClasses, DialogTitleProps as MuiDialogTitleProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DialogTitleProps extends MuiDialogTitleProps {
}
export type DialogTitleClasses = Extract<MuiDialogTitleClasses, 'root'>;
export declare function DialogTitleStyles(theme: Theme): Styles;
export declare const DialogTitleStyle: Styles;
export declare function DialogTitle(props: DialogTitleProps): import("react/jsx-runtime").JSX.Element;
