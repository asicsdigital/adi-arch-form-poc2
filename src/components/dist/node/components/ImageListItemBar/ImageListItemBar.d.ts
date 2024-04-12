import { ImageListItemBarClasses as MuiImageListItemBarClasses, ImageListItemBarProps as MuiImageListItemBarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ImageListItemBarProps extends MuiImageListItemBarProps {
}
export type ImageListItemBarClasses = Extract<MuiImageListItemBarClasses, 'root'>;
export declare function ImageListItemBarStyles(theme: Theme): Styles;
export declare const ImageListItemBarStyle: Styles;
export declare function ImageListItemBar(props: ImageListItemBarProps): import("react/jsx-runtime").JSX.Element;
