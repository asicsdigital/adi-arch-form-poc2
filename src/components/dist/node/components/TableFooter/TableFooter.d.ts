import { TableFooterClasses as MuiTableFooterClasses, TableFooterProps as MuiTableFooterProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TableFooterProps extends MuiTableFooterProps {
}
export type TableFooterClasses = Extract<MuiTableFooterClasses, 'root'>;
export declare function TableFooterStyles(theme: Theme): Styles;
export declare const TableFooterStyle: Styles;
export declare function TableFooter(props: TableFooterProps): import("react/jsx-runtime").JSX.Element;
