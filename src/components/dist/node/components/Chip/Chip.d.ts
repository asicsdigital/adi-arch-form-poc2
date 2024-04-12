import { ChipClasses as MuiChipClasses, ChipProps as MuiChipProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ChipProps extends MuiChipProps {
}
export type ChipClasses = Extract<MuiChipClasses, 'root'>;
export declare function ChipStyles(theme: Theme): Styles;
export declare const ChipStyle: Styles;
export declare function Chip(props: ChipProps): import("react/jsx-runtime").JSX.Element;
