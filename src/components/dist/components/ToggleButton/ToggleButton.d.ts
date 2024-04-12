import { ToggleButtonClasses as MuiToggleButtonClasses, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ToggleButtonProps extends MuiToggleButtonProps {
}
export type ToggleButtonClasses = Extract<MuiToggleButtonClasses, 'root'>;
export declare function ToggleButtonStyles(theme: Theme): Styles;
export declare const ToggleButtonStyle: Styles;
export declare function ToggleButton(props: ToggleButtonProps): import("react/jsx-runtime").JSX.Element;
