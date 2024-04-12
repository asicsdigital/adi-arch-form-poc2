import { TabClasses as MuiTabClasses, TabProps as MuiTabProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TabProps extends MuiTabProps {
}
export type TabClasses = Extract<MuiTabClasses, 'root'>;
export declare function TabStyles(theme: Theme): Styles;
export declare const TabStyle: Styles;
export declare function Tab(props: TabProps): import("react/jsx-runtime").JSX.Element;
