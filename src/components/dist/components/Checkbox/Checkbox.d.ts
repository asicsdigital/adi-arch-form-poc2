import { Control } from 'react-hook-form';
import { CheckboxClasses as MuiCheckboxClasses, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CheckboxProps extends MuiCheckboxProps {
    rhfControl?: Control<any, any>;
}
export type CheckboxClasses = Extract<MuiCheckboxClasses, 'root'>;
export declare function CheckboxStyles(theme: Theme): Styles;
export declare const CheckboxStyle: Styles;
export declare function Checkbox(props: CheckboxProps): import("react/jsx-runtime").JSX.Element;
