/// <reference types="react" />
import { Control } from 'react-hook-form';
import { CSSProperties, FormContentOptions, FormInput, Styles, Theme } from '../../types/index';
type DirectionProp = CSSProperties['flexDirection'];
type GapProp = CSSProperties['gap'];
export interface FormContentProps extends FormContentOptions {
    children?: React.ReactNode;
    direction?: DirectionProp;
    gap?: GapProp;
    rhfControl?: Control;
}
export declare const FormContentClassKey: string;
export type FormContentClasses = 'root';
export declare function FormContentStyles(theme: Theme): Styles;
export declare const FormContentStyle: Styles;
export declare function composeFormContentInput(formInput: FormInput): React.ReactNode;
export declare function FormContent(props: FormContentProps): import("react/jsx-runtime").JSX.Element;
export {};
