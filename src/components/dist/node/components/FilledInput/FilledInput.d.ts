import { FilledInputClasses as MuiFilledInputClasses, FilledInputProps as MuiFilledInputProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface FilledInputProps extends MuiFilledInputProps {
}
export type FilledInputClasses = Extract<MuiFilledInputClasses, 'root'>;
export declare function FilledInputStyles(theme: Theme): Styles;
export declare const FilledInputStyle: Styles;
export declare function FilledInput(props: FilledInputProps): import("react/jsx-runtime").JSX.Element;
