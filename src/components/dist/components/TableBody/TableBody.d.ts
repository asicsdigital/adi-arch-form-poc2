import { TableBodyClasses as MuiTableBodyClasses, TableBodyProps as MuiTableBodyProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableBodyProps extends MuiTableBodyProps {
}
export type TableBodyClasses = Extract<MuiTableBodyClasses, 'root'>;
export declare function TableBodyStyles(theme: Theme): Styles;
export declare const TableBodyStyle: Styles;
export declare function TableBody(props: TableBodyProps): import("react/jsx-runtime").JSX.Element;
