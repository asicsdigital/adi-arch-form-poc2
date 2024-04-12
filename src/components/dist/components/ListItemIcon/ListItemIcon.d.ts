import { ListItemIconClasses as MuiListItemIconClasses, ListItemIconProps as MuiListItemIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListItemIconProps extends MuiListItemIconProps {
}
export type ListItemIconClasses = Extract<MuiListItemIconClasses, 'root'>;
export declare function ListItemIconStyles(theme: Theme): Styles;
export declare const ListItemIconStyle: Styles;
export declare function ListItemIcon(props: ListItemIconProps): import("react/jsx-runtime").JSX.Element;
