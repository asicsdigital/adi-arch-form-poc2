import { PaperClasses as MuiPaperClasses, PaperProps as MuiPaperProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface PaperProps extends MuiPaperProps {
}
export type PaperClasses = Extract<MuiPaperClasses, 'root'>;
export declare function PaperStyles(theme: Theme): Styles;
export declare const PaperStyle: Styles;
export declare function Paper(props: PaperProps): import("react/jsx-runtime").JSX.Element;
