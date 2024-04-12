import { CardActionAreaClasses as MuiCardActionAreaClasses, CardActionAreaProps as MuiCardActionAreaProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CardActionAreaProps extends MuiCardActionAreaProps {
}
export type CardActionAreaClasses = Extract<MuiCardActionAreaClasses, 'root'>;
export declare function CardActionAreaStyles(theme: Theme): Styles;
export declare const CardActionAreaStyle: Styles;
export declare function CardActionArea(props: CardActionAreaProps): import("react/jsx-runtime").JSX.Element;
