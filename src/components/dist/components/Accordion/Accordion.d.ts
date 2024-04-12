import { AccordionClasses as MuiAccordionClasses, AccordionProps as MuiAccordionProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AccordionProps extends MuiAccordionProps {
}
export type AccordionClasses = Extract<MuiAccordionClasses, 'root'>;
export declare function AccordionStyles(theme: Theme): Styles;
export declare const AccordionStyle: Styles;
export declare function Accordion(props: AccordionProps): import("react/jsx-runtime").JSX.Element;
