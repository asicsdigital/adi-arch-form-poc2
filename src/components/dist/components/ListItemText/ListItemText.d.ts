import { ListItemTextClasses as MuiListItemTextClasses, ListItemTextProps as MuiListItemTextProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListItemTextProps extends MuiListItemTextProps {
}
export type ListItemTextClasses = Extract<MuiListItemTextClasses, 'root'>;
export declare function ListItemTextStyles(theme: Theme): Styles;
export declare const ListItemTextStyle: Styles;
export declare function ListItemText(props: ListItemTextProps): import("react/jsx-runtime").JSX.Element;
