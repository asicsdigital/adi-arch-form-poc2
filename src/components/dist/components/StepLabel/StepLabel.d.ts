import { StepLabelClasses as MuiStepLabelClasses, StepLabelProps as MuiStepLabelProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepLabelProps extends MuiStepLabelProps {
}
export type StepLabelClasses = Extract<MuiStepLabelClasses, 'root'>;
export declare function StepLabelStyles(theme: Theme): Styles;
export declare const StepLabelStyle: Styles;
export declare function StepLabel(props: StepLabelProps): import("react/jsx-runtime").JSX.Element;
