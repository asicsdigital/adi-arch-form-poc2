import { MenuClasses as MuiMenuClasses, MenuProps as MuiMenuProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface MenuProps extends MuiMenuProps {
}
export type MenuClasses = Extract<MuiMenuClasses, 'root'>;
export declare function MenuStyles(theme: Theme): Styles;
export declare const MenuStyle: Styles;
export declare function Menu(props: MenuProps): import("react/jsx-runtime").JSX.Element;
