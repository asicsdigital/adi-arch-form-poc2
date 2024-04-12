import { NativeSelectClasses as MuiNativeSelectClasses, NativeSelectProps as MuiNativeSelectProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface NativeSelectProps extends MuiNativeSelectProps {
}
export type NativeSelectClasses = Extract<MuiNativeSelectClasses, 'root'>;
export declare function NativeSelectStyles(theme: Theme): Styles;
export declare const NativeSelectStyle: Styles;
export declare function NativeSelect(props: NativeSelectProps): import("react/jsx-runtime").JSX.Element;
