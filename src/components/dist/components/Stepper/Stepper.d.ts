import { StepperClasses as MuiStepperClasses, StepperProps as MuiStepperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepperProps extends MuiStepperProps {
}
export type StepperClasses = Extract<MuiStepperClasses, 'root'>;
export declare function StepperStyles(theme: Theme): Styles;
export declare const StepperStyle: Styles;
export declare function Stepper(props: StepperProps): import("react/jsx-runtime").JSX.Element;
