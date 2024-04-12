import { MenuItemClasses as MuiMenuItemClasses, MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface MenuItemProps extends MuiMenuItemProps {
}
export type MenuItemClasses = Extract<MuiMenuItemClasses, 'root'>;
export declare function MenuItemStyles(theme: Theme): Styles;
export declare const MenuItemStyle: Styles;
export declare function MenuItem(props: MenuItemProps): import("react/jsx-runtime").JSX.Element;
