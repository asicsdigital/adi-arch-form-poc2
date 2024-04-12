import { ListSubheaderClasses as MuiListSubheaderClasses, ListSubheaderProps as MuiListSubheaderProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListSubheaderProps extends MuiListSubheaderProps {
}
export type ListSubheaderClasses = Extract<MuiListSubheaderClasses, 'root'>;
export declare function ListSubheaderStyles(theme: Theme): Styles;
export declare const ListSubheaderStyle: Styles;
export declare function ListSubheader(props: ListSubheaderProps): import("react/jsx-runtime").JSX.Element;
