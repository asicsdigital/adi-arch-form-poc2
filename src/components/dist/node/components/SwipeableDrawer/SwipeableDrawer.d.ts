import { DrawerClasses as MuiDrawerClasses, SwipeableDrawerProps as MuiSwipeableDrawerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SwipeableDrawerProps extends MuiSwipeableDrawerProps {
}
export type SwipeableDrawerClasses = Extract<MuiDrawerClasses, 'root'>;
export declare function SwipeableDrawerStyles(theme: Theme): Styles;
export declare const SwipeableDrawerStyle: Styles;
export declare function SwipeableDrawer(props: SwipeableDrawerProps): import("react/jsx-runtime").JSX.Element;
