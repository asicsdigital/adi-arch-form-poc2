import { IconClasses as MuiIconClasses, IconProps as MuiIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface IconProps extends MuiIconProps {
}
export type IconClasses = Extract<MuiIconClasses, 'root'>;
export declare function IconStyles(theme: Theme): Styles;
export declare const IconStyle: Styles;
export declare function Icon(props: IconProps): import("react/jsx-runtime").JSX.Element;
