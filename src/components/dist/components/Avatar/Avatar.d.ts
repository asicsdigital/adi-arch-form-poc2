import { AvatarClasses as MuiAvatarClasses, AvatarProps as MuiAvatarProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AvatarProps extends MuiAvatarProps {
}
export type AvatarClasses = Extract<MuiAvatarClasses, 'root'>;
export declare function AvatarStyles(theme: Theme): Styles;
export declare const AvatarStyle: Styles;
export declare function Avatar(props: AvatarProps): import("react/jsx-runtime").JSX.Element;
