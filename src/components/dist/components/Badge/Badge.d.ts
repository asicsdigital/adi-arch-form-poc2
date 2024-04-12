import { BadgeClasses as MuiBadgeClasses, BadgeProps as MuiBadgeProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface BadgeProps extends MuiBadgeProps {
}
export type BadgeClasses = Extract<MuiBadgeClasses, 'root'>;
export declare function BadgeStyles(theme: Theme): Styles;
export declare const BadgeStyle: Styles;
export declare function Badge(props: BadgeProps): import("react/jsx-runtime").JSX.Element;
