import { GridClasses as MuiGridClasses, GridProps as MuiGridProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface GridProps extends MuiGridProps {
}
export type GridClasses = Extract<MuiGridClasses, 'root'>;
export declare function GridStyles(theme: Theme): Styles;
export declare const GridStyle: Styles;
export declare function Grid(props: GridProps): import("react/jsx-runtime").JSX.Element;
