import { AppBarClasses as MuiAppBarClasses, AppBarProps as MuiAppBarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AppBarProps extends MuiAppBarProps {
}
export type AppBarClasses = Extract<MuiAppBarClasses, 'root'>;
export declare function AppBarStyles(theme: Theme): Styles;
export declare const AppBarStyle: Styles;
export declare function AppBar(props: AppBarProps): import("react/jsx-runtime").JSX.Element;
