import { ListClasses as MuiListClasses, MenuListProps as MuiMenuListProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface MenuListProps extends MuiMenuListProps {
}
export type MenuListClasses = Extract<MuiListClasses, 'root'>;
export declare function MenuListStyles(theme: Theme): Styles;
export declare const MenuListStyle: Styles;
export declare function MenuList(props: MenuListProps): import("react/jsx-runtime").JSX.Element;
