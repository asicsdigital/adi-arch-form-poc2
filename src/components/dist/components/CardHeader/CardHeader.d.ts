import { CardHeaderClasses as MuiCardHeaderClasses, CardHeaderProps as MuiCardHeaderProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CardHeaderProps extends MuiCardHeaderProps {
}
export type CardHeaderClasses = Extract<MuiCardHeaderClasses, 'root'>;
export declare function CardHeaderStyles(theme: Theme): Styles;
export declare const CardHeaderStyle: Styles;
export declare function CardHeader(props: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
