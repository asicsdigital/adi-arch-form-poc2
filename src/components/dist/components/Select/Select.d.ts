import { Control } from 'react-hook-form';
import { SelectClasses as MuiSelectClasses, SelectProps as MuiSelectProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export type SelectProps = MuiSelectProps & {
    rhfControl?: Control<any, any>;
};
export type SelectClasses = Extract<MuiSelectClasses, 'root'>;
export declare function SelectStyles(theme: Theme): Styles;
export declare const SelectStyle: Styles;
export declare function Select(props: SelectProps): import("react/jsx-runtime").JSX.Element;
