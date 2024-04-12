import { ListItemClasses as MuiListItemClasses, ListItemProps as MuiListItemProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListItemProps extends MuiListItemProps {
}
export type ListItemClasses = Extract<MuiListItemClasses, 'root'>;
export declare function ListItemStyles(theme: Theme): Styles;
export declare const ListItemStyle: Styles;
export declare function ListItem(props: ListItemProps): import("react/jsx-runtime").JSX.Element;
