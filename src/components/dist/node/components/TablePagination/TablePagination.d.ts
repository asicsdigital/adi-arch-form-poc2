import { TablePaginationClasses as MuiTablePaginationClasses, TablePaginationProps as MuiTablePaginationProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export type TablePaginationProps = MuiTablePaginationProps & {};
export type TablePaginationClasses = Extract<MuiTablePaginationClasses, 'root'>;
export declare function TablePaginationStyles(theme: Theme): Styles;
export declare const TablePaginationStyle: Styles;
export declare function TablePagination(props: TablePaginationProps): import("react/jsx-runtime").JSX.Element;
