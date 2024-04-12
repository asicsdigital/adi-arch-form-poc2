import { TooltipClasses as MuiTooltipClasses, TooltipProps as MuiTooltipProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TooltipProps extends MuiTooltipProps {
}
export type TooltipClasses = Extract<MuiTooltipClasses, 'root'>;
export declare function TooltipStyles(theme: Theme): Styles;
export declare const TooltipStyle: Styles;
export declare function Tooltip(props: TooltipProps): import("react/jsx-runtime").JSX.Element;
