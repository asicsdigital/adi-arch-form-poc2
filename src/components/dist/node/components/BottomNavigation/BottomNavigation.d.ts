import { BottomNavigationClasses as MuiBottomNavigationClasses, BottomNavigationProps as MuiBottomNavigationProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface BottomNavigationProps extends MuiBottomNavigationProps {
}
export type BottomNavigationClasses = Extract<MuiBottomNavigationClasses, 'root'>;
export declare function BottomNavigationStyles(theme: Theme): Styles;
export declare const BottomNavigationStyle: Styles;
export declare function BottomNavigation(props: BottomNavigationProps): import("react/jsx-runtime").JSX.Element;
