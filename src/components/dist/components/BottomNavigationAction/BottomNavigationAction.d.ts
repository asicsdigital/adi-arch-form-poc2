import { BottomNavigationActionClasses as MuiBottomNavigationActionClasses, BottomNavigationActionProps as MuiBottomNavigationActionProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface BottomNavigationActionProps extends MuiBottomNavigationActionProps {
}
export type BottomNavigationActionClasses = Extract<MuiBottomNavigationActionClasses, 'root'>;
export declare function BottomNavigationActionStyles(theme: Theme): Styles;
export declare const BottomNavigationActionStyle: Styles;
export declare function BottomNavigationAction(props: BottomNavigationActionProps): import("react/jsx-runtime").JSX.Element;
