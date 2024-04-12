import { BreadcrumbsClasses as MuiBreadcrumbsClasses, BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface BreadcrumbsProps extends MuiBreadcrumbsProps {
}
export type BreadcrumbsClasses = Extract<MuiBreadcrumbsClasses, 'root'>;
export declare function BreadcrumbsStyles(theme: Theme): Styles;
export declare const BreadcrumbsStyle: Styles;
export declare function Breadcrumbs(props: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
