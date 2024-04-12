import { StepConnectorClasses as MuiStepConnectorClasses, StepConnectorProps as MuiStepConnectorProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface StepConnectorProps extends MuiStepConnectorProps {
}
export type StepConnectorClasses = Extract<MuiStepConnectorClasses, 'root'>;
export declare function StepConnectorStyles(theme: Theme): Styles;
export declare const StepConnectorStyle: Styles;
export declare function StepConnector(props: StepConnectorProps): import("react/jsx-runtime").JSX.Element;
