import { TableHeadClasses as MuiTableHeadClasses, TableHeadProps as MuiTableHeadProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableHeadProps extends MuiTableHeadProps {
}
export type TableHeadClasses = Extract<MuiTableHeadClasses, 'root'>;
export declare function TableHeadStyles(theme: Theme): Styles;
export declare const TableHeadStyle: Styles;
export declare function TableHead(props: TableHeadProps): import("react/jsx-runtime").JSX.Element;
