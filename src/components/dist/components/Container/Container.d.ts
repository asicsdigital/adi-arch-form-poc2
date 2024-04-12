import { ContainerClasses as MuiContainerClasses, ContainerProps as MuiContainerProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface ContainerProps extends MuiContainerProps {
}
export type ContainerClasses = Extract<MuiContainerClasses, 'root'>;
export declare function ContainerStyles(theme: Theme): Styles;
export declare const ContainerStyle: Styles;
export declare function Container(props: ContainerProps): import("react/jsx-runtime").JSX.Element;
