import { StepButtonClasses as MuiStepButtonClasses, StepButtonProps as MuiStepButtonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepButtonProps extends MuiStepButtonProps {
}
export type StepButtonClasses = Extract<MuiStepButtonClasses, 'root'>;
export declare function StepButtonStyles(theme: Theme): Styles;
export declare const StepButtonStyle: Styles;
export declare function StepButton(props: StepButtonProps): import("react/jsx-runtime").JSX.Element;
