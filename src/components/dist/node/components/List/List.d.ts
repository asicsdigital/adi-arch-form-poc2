import { ListClasses as MuiListClasses, ListProps as MuiListProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListProps extends MuiListProps {
}
export type ListClasses = Extract<MuiListClasses, 'root'>;
export declare function ListStyles(theme: Theme): Styles;
export declare const ListStyle: Styles;
export declare function List(props: ListProps): import("react/jsx-runtime").JSX.Element;
