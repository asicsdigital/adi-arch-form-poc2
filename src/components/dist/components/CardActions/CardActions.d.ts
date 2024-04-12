import { CardActionsClasses as MuiCardActionsClasses, CardActionsProps as MuiCardActionsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CardActionsProps extends MuiCardActionsProps {
}
export type CardActionsClasses = Extract<MuiCardActionsClasses, 'root'>;
export declare function CardActionsStyles(theme: Theme): Styles;
export declare const CardActionsStyle: Styles;
export declare function CardActions(props: CardActionsProps): import("react/jsx-runtime").JSX.Element;
