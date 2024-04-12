import { ImageListItemClasses as MuiImageListItemClasses, ImageListItemProps as MuiImageListItemProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ImageListItemProps extends MuiImageListItemProps {
}
export type ImageListItemClasses = Extract<MuiImageListItemClasses, 'root'>;
export declare function ImageListItemStyles(theme: Theme): Styles;
export declare const ImageListItemStyle: Styles;
export declare function ImageListItem(props: ImageListItemProps): import("react/jsx-runtime").JSX.Element;
