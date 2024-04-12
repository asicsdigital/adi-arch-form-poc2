import { ListItemAvatarClasses as MuiListItemAvatarClasses, ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListItemAvatarProps extends MuiListItemAvatarProps {
}
export type ListItemAvatarClasses = Extract<MuiListItemAvatarClasses, 'root'>;
export declare function ListItemAvatarStyles(theme: Theme): Styles;
export declare const ListItemAvatarStyle: Styles;
export declare function ListItemAvatar(props: ListItemAvatarProps): import("react/jsx-runtime").JSX.Element;
