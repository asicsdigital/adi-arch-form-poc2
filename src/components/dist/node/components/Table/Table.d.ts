import { TableClasses as MuiTableClasses, TableProps as MuiTableProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableProps extends MuiTableProps {
}
export type TableClasses = Extract<MuiTableClasses, 'root'>;
export declare function TableStyles(theme: Theme): Styles;
export declare const TableStyle: Styles;
export declare function Table(props: TableProps): import("react/jsx-runtime").JSX.Element;
