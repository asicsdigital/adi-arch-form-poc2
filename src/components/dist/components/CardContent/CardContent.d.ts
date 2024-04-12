import { CardContentClasses as MuiCardContentClasses, CardContentProps as MuiCardContentProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CardContentProps extends MuiCardContentProps {
}
export type CardContentClasses = Extract<MuiCardContentClasses, 'root'>;
export declare function CardContentStyles(theme: Theme): Styles;
export declare const CardContentStyle: Styles;
export declare function CardContent(props: CardContentProps): import("react/jsx-runtime").JSX.Element;
