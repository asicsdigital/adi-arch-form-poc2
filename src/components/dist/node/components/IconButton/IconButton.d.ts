import { IconButtonClasses as MuiIconButtonClasses, IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface IconButtonProps extends MuiIconButtonProps {
}
export type IconButtonClasses = Extract<MuiIconButtonClasses, 'root'>;
export declare function IconButtonStyles(theme: Theme): Styles;
export declare const IconButtonStyle: Styles;
export declare function IconButton(props: IconButtonProps): import("react/jsx-runtime").JSX.Element;
