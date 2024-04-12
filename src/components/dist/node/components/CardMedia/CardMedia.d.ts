import { CardMediaClasses as MuiCardMediaClasses, CardMediaProps as MuiCardMediaProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CardMediaProps extends MuiCardMediaProps {
}
export type CardMediaClasses = Extract<MuiCardMediaClasses, 'root'>;
export declare function CardMediaStyles(theme: Theme): Styles;
export declare const CardMediaStyle: Styles;
export declare function CardMedia(props: CardMediaProps): import("react/jsx-runtime").JSX.Element;
