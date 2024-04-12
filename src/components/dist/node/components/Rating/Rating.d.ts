import { RatingClasses as MuiRatingClasses, RatingProps as MuiRatingProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface RatingProps extends MuiRatingProps {
}
export type RatingClasses = Extract<MuiRatingClasses, 'root'>;
export declare function RatingStyles(theme: Theme): Styles;
export declare const RatingStyle: Styles;
export declare function Rating(props: RatingProps): import("react/jsx-runtime").JSX.Element;
