import { DrawerClasses as MuiDrawerClasses, DrawerProps as MuiDrawerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DrawerProps extends MuiDrawerProps {
}
export type DrawerClasses = Extract<MuiDrawerClasses, 'root'>;
export declare function DrawerStyles(theme: Theme): Styles;
export declare const DrawerStyle: Styles;
export declare function Drawer(props: DrawerProps): import("react/jsx-runtime").JSX.Element;
