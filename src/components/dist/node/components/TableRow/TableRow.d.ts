import { TableRowClasses as MuiTableRowClasses, TableRowProps as MuiTableRowProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableRowProps extends MuiTableRowProps {
}
export type TableRowClasses = Extract<MuiTableRowClasses, 'root'>;
export declare function TableRowStyles(theme: Theme): Styles;
export declare const TableRowStyle: Styles;
export declare function TableRow(props: TableRowProps): import("react/jsx-runtime").JSX.Element;
