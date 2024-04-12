import { ButtonProps as MuiButtonProps, ListItemButtonClasses as MuiListItemButtonClasses, ListItemButtonProps as MuiListItemButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListItemButtonProps extends MuiListItemButtonProps {
    href?: MuiButtonProps['href'];
    target?: string;
}
export type ListItemButtonClasses = Extract<MuiListItemButtonClasses, 'root'>;
export declare function ListItemButtonStyles(theme: Theme): Styles;
export declare const ListItemButtonStyle: Styles;
export declare function ListItemButton(props: ListItemButtonProps): import("react/jsx-runtime").JSX.Element;
