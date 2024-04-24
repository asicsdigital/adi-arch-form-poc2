import { SelectClasses as MuiSelectClasses, SelectProps as MuiSelectProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export type SelectProps = MuiSelectProps & {};
export type SelectClasses = Extract<MuiSelectClasses, 'root'>;
export declare function SelectStyles(theme: Theme): Styles;
export declare const SelectStyle: Styles;
export declare function Select(props: SelectProps): import("react/jsx-runtime").JSX.Element;
