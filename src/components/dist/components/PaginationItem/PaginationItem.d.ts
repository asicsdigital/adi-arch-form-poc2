import { PaginationItemClasses as MuiPaginationItemClasses, PaginationItemProps as MuiPaginationItemProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface PaginationItemProps extends MuiPaginationItemProps {
}
export type PaginationItemClasses = Extract<MuiPaginationItemClasses, 'root'>;
export declare function PaginationItemStyles(theme: Theme): Styles;
export declare const PaginationItemStyle: Styles;
export declare function PaginationItem(props: PaginationItemProps): import("react/jsx-runtime").JSX.Element;
