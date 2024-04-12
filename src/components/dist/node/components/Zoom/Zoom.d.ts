import { ZoomProps as MuiZoomProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ZoomProps extends MuiZoomProps {
}
export declare function ZoomStyles(theme: Theme): Styles;
export declare const ZoomStyle: Styles;
export declare function Zoom(props: ZoomProps): import("react/jsx-runtime").JSX.Element;
