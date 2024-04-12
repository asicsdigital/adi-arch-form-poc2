import { StackClasses as MuiStackClasses, StackProps as MuiStackProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StackProps extends MuiStackProps {
}
export type StackClasses = Extract<MuiStackClasses, 'root'>;
export declare function StackStyles(theme: Theme): Styles;
export declare const StackStyle: Styles;
export declare function Stack(props: StackProps): import("react/jsx-runtime").JSX.Element;
