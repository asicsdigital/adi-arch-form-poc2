import { Control } from 'react-hook-form';
import { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface RadioGroupProps extends MuiRadioGroupProps {
    rhfControl?: Control<any, any>;
}
export declare function RadioGroupStyles(theme: Theme): Styles;
export declare const RadioGroupStyle: Styles;
export declare function RadioGroup(props: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
