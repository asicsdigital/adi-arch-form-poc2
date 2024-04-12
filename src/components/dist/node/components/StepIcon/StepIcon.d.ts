import { StepIconClasses as MuiStepIconClasses, StepIconProps as MuiStepIconProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepIconProps extends MuiStepIconProps {
}
export type StepIconClasses = Extract<MuiStepIconClasses, 'root'>;
export declare function StepIconStyles(theme: Theme): Styles;
export declare const StepIconStyle: Styles;
export declare function StepIcon(props: StepIconProps): import("react/jsx-runtime").JSX.Element;
