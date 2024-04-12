import { CircularProgressClasses as MuiCircularProgressClasses, CircularProgressProps as MuiCircularProgressProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CircularProgressProps extends MuiCircularProgressProps {
}
export type CircularProgressClasses = Extract<MuiCircularProgressClasses, 'root'>;
export declare function CircularProgressStyles(theme: Theme): Styles;
export declare const CircularProgressStyle: Styles;
export declare function CircularProgress(props: CircularProgressProps): import("react/jsx-runtime").JSX.Element;
