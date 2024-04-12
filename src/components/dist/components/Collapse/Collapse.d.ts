import { CollapseClasses as MuiCollapseClasses, CollapseProps as MuiCollapseProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface CollapseProps extends MuiCollapseProps {
}
export type CollapseClasses = Extract<MuiCollapseClasses, 'root'>;
export declare function CollapseStyles(theme: Theme): Styles;
export declare const CollapseStyle: Styles;
export declare function Collapse(props: CollapseProps): import("react/jsx-runtime").JSX.Element;
