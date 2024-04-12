import { TypographyClasses as MuiTypographyClasses, TypographyProps as MuiTypographyProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface TypographyProps extends MuiTypographyProps {
}
export type TypographyClasses = Extract<MuiTypographyClasses, 'root'>;
export declare function TypographyStyles(theme: Theme): Styles;
export declare const TypographyStyle: Styles;
export declare function Typography(props: TypographyProps): import("react/jsx-runtime").JSX.Element;
