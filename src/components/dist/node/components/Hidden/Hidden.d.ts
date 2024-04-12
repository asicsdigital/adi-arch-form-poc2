import { HiddenProps as MuiHiddenProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface HiddenProps extends MuiHiddenProps {
}
export declare function HiddenStyles(theme: Theme): Styles;
export declare const HiddenStyle: Styles;
export declare function Hidden(props: HiddenProps): import("react/jsx-runtime").JSX.Element;
