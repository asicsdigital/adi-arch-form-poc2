import { FadeProps as MuiFadeProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FadeProps extends MuiFadeProps {
}
export declare function FadeStyles(theme: Theme): Styles;
export declare const FadeStyle: Styles;
export declare function Fade(props: FadeProps): import("react/jsx-runtime").JSX.Element;
