import { TableCellClasses as MuiTableCellClasses, TableCellProps as MuiTableCellProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableCellProps extends MuiTableCellProps {
}
export type TableCellClasses = Extract<MuiTableCellClasses, 'root'>;
export declare function TableCellStyles(theme: Theme): Styles;
export declare const TableCellStyle: Styles;
export declare function TableCell(props: TableCellProps): import("react/jsx-runtime").JSX.Element;
