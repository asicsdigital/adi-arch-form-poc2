import { AccordionClasses as MuiAccordionClasses, AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AccordionSummaryProps extends MuiAccordionSummaryProps {
}
export type AccordionSummaryClasses = Extract<MuiAccordionClasses, 'root'>;
export declare function AccordionSummaryStyles(theme: Theme): Styles;
export declare const AccordionSummaryStyle: Styles;
export declare function AccordionSummary(props: AccordionSummaryProps): import("react/jsx-runtime").JSX.Element;
