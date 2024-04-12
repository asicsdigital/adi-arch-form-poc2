import { LinkClasses as MuiLinkClasses, LinkProps as MuiLinkProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface LinkProps extends MuiLinkProps {
}
export type LinkClasses = Extract<MuiLinkClasses, 'root'>;
export declare function LinkStyles(theme: Theme): Styles;
export declare const LinkStyle: Styles;
export declare function Link(props: LinkProps): import("react/jsx-runtime").JSX.Element;
