import { SwitchClasses as MuiSwitchClasses, SwitchProps as MuiSwitchProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SwitchProps extends MuiSwitchProps {
}
export type SwitchClasses = Extract<MuiSwitchClasses, 'root'>;
export declare function SwitchStyles(theme: Theme): Styles;
export declare const SwitchStyle: Styles;
export declare function Switch(props: SwitchProps): import("react/jsx-runtime").JSX.Element;
