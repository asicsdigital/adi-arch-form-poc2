import { TabScrollButtonClasses as MuiTabScrollButtonClasses, TabScrollButtonProps as MuiTabScrollButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TabScrollButtonProps extends MuiTabScrollButtonProps {
}
export type TabScrollButtonClasses = Extract<MuiTabScrollButtonClasses, 'root'>;
export declare function TabScrollButtonStyles(theme: Theme): Styles;
export declare const TabScrollButtonStyle: Styles;
export declare function TabScrollButton(props: TabScrollButtonProps): import("react/jsx-runtime").JSX.Element;
