import { SliderClasses as MuiSliderClasses, SliderProps as MuiSliderProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SliderProps extends MuiSliderProps {
}
export type SliderClasses = Extract<MuiSliderClasses, 'root'>;
export declare function SliderStyles(theme: Theme): Styles;
export declare const SliderStyle: Styles;
export declare function Slider(props: SliderProps): import("react/jsx-runtime").JSX.Element;
