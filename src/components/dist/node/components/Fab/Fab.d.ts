import { FabClasses as MuiFabClasses, FabProps as MuiFabProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FabProps extends MuiFabProps {
}
export type FabClasses = Extract<MuiFabClasses, 'root'>;
export declare function FabStyles(theme: Theme): Styles;
export declare const FabStyle: Styles;
export declare function Fab(props: FabProps): import("react/jsx-runtime").JSX.Element;
