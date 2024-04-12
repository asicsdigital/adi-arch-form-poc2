import { TabsClasses as MuiTabsClasses, TabsProps as MuiTabsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TabsProps extends MuiTabsProps {
}
export type TabsClasses = Extract<MuiTabsClasses, 'root'>;
export declare function TabsStyles(theme: Theme): Styles;
export declare const TabsStyle: Styles;
export declare function Tabs(props: TabsProps): import("react/jsx-runtime").JSX.Element;
