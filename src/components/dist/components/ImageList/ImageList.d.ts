import { ImageListClasses as MuiImageListClasses, ImageListProps as MuiImageListProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ImageListProps extends MuiImageListProps {
}
export type ImageListClasses = Extract<MuiImageListClasses, 'root'>;
export declare function ImageListStyles(theme: Theme): Styles;
export declare const ImageListStyle: Styles;
export declare function ImageList(props: ImageListProps): import("react/jsx-runtime").JSX.Element;
