import { MobileStepperClasses as MuiMobileStepperClasses, MobileStepperProps as MuiMobileStepperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface MobileStepperProps extends MuiMobileStepperProps {
}
export type MobileStepperClasses = Extract<MuiMobileStepperClasses, 'root'>;
export declare function MobileStepperStyles(theme: Theme): Styles;
export declare const MobileStepperStyle: Styles;
export declare function MobileStepper(props: MobileStepperProps): import("react/jsx-runtime").JSX.Element;
