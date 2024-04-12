import { RadioClasses as MuiRadioClasses, RadioProps as MuiRadioProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface RadioProps extends MuiRadioProps {
}
export type RadioClasses = Extract<MuiRadioClasses, 'root'>;
export declare function RadioStyles(theme: Theme): Styles;
export declare const RadioStyle: Styles;
export declare function Radio(props: RadioProps): import("react/jsx-runtime").JSX.Element;
