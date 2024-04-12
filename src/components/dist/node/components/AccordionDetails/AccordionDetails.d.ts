import { AccordionDetailsClasses as MuiAccordionDetailsClasses, AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AccordionDetailsProps extends MuiAccordionDetailsProps {
}
export type AccordionDetailsClasses = Extract<MuiAccordionDetailsClasses, 'root'>;
export declare function AccordionDetailsStyles(theme: Theme): Styles;
export declare const AccordionDetailsStyle: Styles;
export declare function AccordionDetails(props: AccordionDetailsProps): import("react/jsx-runtime").JSX.Element;
