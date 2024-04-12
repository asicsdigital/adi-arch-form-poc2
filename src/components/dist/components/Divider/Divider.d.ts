import { DividerClasses as MuiDividerClasses, DividerProps as MuiDividerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface DividerProps extends MuiDividerProps {
}
export type DividerClasses = Extract<MuiDividerClasses, 'root'>;
export declare function DividerStyles(theme: Theme): Styles;
export declare const DividerStyle: Styles;
export declare function Divider(props: DividerProps): import("react/jsx-runtime").JSX.Element;
