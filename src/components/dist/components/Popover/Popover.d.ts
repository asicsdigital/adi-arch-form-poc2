import { PopoverClasses as MuiPopoverClasses, PopoverProps as MuiPopoverProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface PopoverProps extends MuiPopoverProps {
}
export type PopoverClasses = Extract<MuiPopoverClasses, 'root'>;
export declare function PopoverStyles(theme: Theme): Styles;
export declare const PopoverStyle: Styles;
export declare function Popover(props: PopoverProps): import("react/jsx-runtime").JSX.Element;
