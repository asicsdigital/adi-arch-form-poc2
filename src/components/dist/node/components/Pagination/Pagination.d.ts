import { PaginationClasses as MuiPaginationClasses, PaginationProps as MuiPaginationProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface PaginationProps extends MuiPaginationProps {
}
export type PaginationClasses = Extract<MuiPaginationClasses, 'root'>;
export declare function PaginationStyles(theme: Theme): Styles;
export declare const PaginationStyle: Styles;
export declare function Pagination(props: PaginationProps): import("react/jsx-runtime").JSX.Element;
