import { ToggleButtonGroupClasses as MuiToggleButtonGroupClasses, ToggleButtonGroupProps as MuiToggleButtonGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {
}
export type ToggleButtonGroupClasses = Extract<MuiToggleButtonGroupClasses, 'root'>;
export declare function ToggleButtonGroupStyles(theme: Theme): Styles;
export declare const ToggleButtonGroupStyle: Styles;
export declare function ToggleButtonGroup(props: ToggleButtonGroupProps): import("react/jsx-runtime").JSX.Element;
