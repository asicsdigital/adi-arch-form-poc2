import { AvatarGroupClasses as MuiAvatarGroupClasses, AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material';
import { Styles, Theme } from '../../types/index';
export interface AvatarGroupProps extends MuiAvatarGroupProps {
}
export type AvatarGroupClasses = Extract<MuiAvatarGroupClasses, 'root'>;
export declare function AvatarGroupStyles(theme: Theme): Styles;
export declare const AvatarGroupStyle: Styles;
export declare function AvatarGroup(props: AvatarGroupProps): import("react/jsx-runtime").JSX.Element;
