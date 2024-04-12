import { StepContentClasses as MuiStepContentClasses, StepContentProps as MuiStepContentProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepContentProps extends MuiStepContentProps {
}
export type StepContentClasses = Extract<MuiStepContentClasses, 'root'>;
export declare function StepContentStyles(theme: Theme): Styles;
export declare const StepContentStyle: Styles;
export declare function StepContent(props: StepContentProps): import("react/jsx-runtime").JSX.Element;
