import { ModalClasses as MuiModalClasses, ModalProps as MuiModalProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ModalProps extends MuiModalProps {
}
export type ModalClasses = Extract<MuiModalClasses, 'root'>;
export declare function ModalStyles(theme: Theme): Styles;
export declare const ModalStyle: Styles;
export declare function Modal(props: ModalProps): import("react/jsx-runtime").JSX.Element;
