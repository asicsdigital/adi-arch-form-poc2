import { SkeletonClasses as MuiSkeletonClasses, SkeletonProps as MuiSkeletonProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface SkeletonProps extends MuiSkeletonProps {
}
export type SkeletonClasses = Extract<MuiSkeletonClasses, 'root'>;
export declare function SkeletonStyles(theme: Theme): Styles;
export declare const SkeletonStyle: Styles;
export declare function Skeleton(props: SkeletonProps): import("react/jsx-runtime").JSX.Element;
