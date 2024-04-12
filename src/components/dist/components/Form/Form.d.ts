/// <reference types="react" />
import { FormOptions, Styles, Theme } from '../../types/index';
export interface FormProps extends FormOptions {
    children?: React.ReactNode;
}
export declare const FormClassKey: string;
export type FormClasses = 'root';
export declare function FormStyles(theme: Theme): Styles;
export declare const FormStyle: Styles;
export declare function Form(props: FormProps): import("react/jsx-runtime").JSX.Element;
