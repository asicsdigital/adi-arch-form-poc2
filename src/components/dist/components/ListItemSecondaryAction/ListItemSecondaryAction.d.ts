import { ListItemSecondaryActionClasses as MuiListItemSecondaryActionClasses, ListItemSecondaryActionProps as MuiListItemSecondaryActionProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ListItemSecondaryActionProps extends MuiListItemSecondaryActionProps {
}
export type ListItemSecondaryActionClasses = Extract<MuiListItemSecondaryActionClasses, 'root'>;
export declare function ListItemSecondaryActionStyles(theme: Theme): Styles;
export declare const ListItemSecondaryActionStyle: Styles;
export declare function ListItemSecondaryAction(props: ListItemSecondaryActionProps): import("react/jsx-runtime").JSX.Element;
