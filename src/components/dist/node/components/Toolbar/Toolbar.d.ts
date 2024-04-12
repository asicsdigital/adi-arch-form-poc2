import { ToolbarClasses as MuiToolbarClasses, ToolbarProps as MuiToolbarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ToolbarProps extends MuiToolbarProps {
}
export type ToolbarClasses = Extract<MuiToolbarClasses, 'root'>;
export declare function ToolbarStyles(theme: Theme): Styles;
export declare const ToolbarStyle: Styles;
export declare function Toolbar(props: ToolbarProps): import("react/jsx-runtime").JSX.Element;
