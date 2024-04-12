import { SvgIconClasses as MuiSvgIconClasses, SvgIconProps as MuiSvgIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SvgIconProps extends MuiSvgIconProps {
}
export type SvgIconClasses = Extract<MuiSvgIconClasses, 'root'>;
export declare function SvgIconStyles(theme: Theme): Styles;
export declare const SvgIconStyle: Styles;
export declare function SvgIcon(props: SvgIconProps): import("react/jsx-runtime").JSX.Element;
