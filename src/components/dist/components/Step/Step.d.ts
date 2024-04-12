import { StepClasses as MuiStepClasses, StepProps as MuiStepProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepProps extends MuiStepProps {
}
export type StepClasses = Extract<MuiStepClasses, 'root'>;
export declare function StepStyles(theme: Theme): Styles;
export declare const StepStyle: Styles;
export declare function Step(props: StepProps): import("react/jsx-runtime").JSX.Element;
