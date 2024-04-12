import { TableSortLabelClasses as MuiTableSortLabelClasses, TableSortLabelProps as MuiTableSortLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableSortLabelProps extends MuiTableSortLabelProps {
}
export type TableSortLabelClasses = Extract<MuiTableSortLabelClasses, 'root'>;
export declare function TableSortLabelStyles(theme: Theme): Styles;
export declare const TableSortLabelStyle: Styles;
export declare function TableSortLabel(props: TableSortLabelProps): import("react/jsx-runtime").JSX.Element;
