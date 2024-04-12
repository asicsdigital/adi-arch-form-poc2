import { LinearProgressClasses as MuiLinearProgressClasses, LinearProgressProps as MuiLinearProgressProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface LinearProgressProps extends MuiLinearProgressProps {
}
export type LinearProgressClasses = Extract<MuiLinearProgressClasses, 'root'>;
export declare function LinearProgressStyles(theme: Theme): Styles;
export declare const LinearProgressStyle: Styles;
export declare function LinearProgress(props: LinearProgressProps): import("react/jsx-runtime").JSX.Element;
