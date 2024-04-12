import { TableContainerClasses as MuiTableContainerClasses, TableContainerProps as MuiTableContainerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableContainerProps extends MuiTableContainerProps {
}
export type TableContainerClasses = Extract<MuiTableContainerClasses, 'root'>;
export declare function TableContainerStyles(theme: Theme): Styles;
export declare const TableContainerStyle: Styles;
export declare function TableContainer(props: TableContainerProps): import("react/jsx-runtime").JSX.Element;
