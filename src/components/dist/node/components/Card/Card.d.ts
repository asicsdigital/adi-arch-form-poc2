import { CardClasses as MuiCardClasses, CardProps as MuiCardProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CardProps extends MuiCardProps {
}
export type CardClasses = Extract<MuiCardClasses, 'root'>;
export declare function CardStyles(theme: Theme): Styles;
export declare const CardStyle: Styles;
export declare function Card(props: CardProps): import("react/jsx-runtime").JSX.Element;
