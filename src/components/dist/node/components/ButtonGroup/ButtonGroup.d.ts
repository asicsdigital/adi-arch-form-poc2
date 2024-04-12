import { ButtonGroupClasses as MuiButtonGroupClasses, ButtonGroupProps as MuiButtonGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ButtonGroupProps extends MuiButtonGroupProps {
}
export type ButtonGroupClasses = Extract<MuiButtonGroupClasses, 'root'>;
export declare function ButtonGroupStyles(theme: Theme): Styles;
export declare const ButtonGroupStyle: Styles;
export declare function ButtonGroup(props: ButtonGroupProps): import("react/jsx-runtime").JSX.Element;
