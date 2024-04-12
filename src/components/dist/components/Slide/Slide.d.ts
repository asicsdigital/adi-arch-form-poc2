import { SlideProps as MuiSlideProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SlideProps extends MuiSlideProps {
}
export declare function SlideStyles(theme: Theme): Styles;
export declare const SlideStyle: Styles;
export declare function Slide(props: SlideProps): import("react/jsx-runtime").JSX.Element;
