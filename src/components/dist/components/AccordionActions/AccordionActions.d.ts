import { AccordionActionsClasses as MuiAccordionActionsClasses, AccordionActionsProps as MuiAccordionActionsProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AccordionActionsProps extends MuiAccordionActionsProps {
}
export type AccordionActionsClasses = Extract<MuiAccordionActionsClasses, 'root'>;
export declare function AccordionActionsStyles(theme: Theme): Styles;
export declare const AccordionActionsStyle: Styles;
export declare function AccordionActions(props: AccordionActionsProps): import("react/jsx-runtime").JSX.Element;
