import { CSSProperties, GroundProps, Styles, Theme } from '../../types/index';
type AlignSelfProp = CSSProperties['alignSelf'];
type FlexBasisProp = CSSProperties['flexBasis'];
type FlexGrowProp = CSSProperties['flexGrow'];
type FlexProp = CSSProperties['flex'];
type FlexShrinkProp = CSSProperties['flexShrink'];
type OrderProp = CSSProperties['order'];
export interface FlexChildProps extends GroundProps {
    alignSelf?: AlignSelfProp;
    flex?: FlexProp;
    flexBasis?: FlexBasisProp;
    flexGrow?: FlexGrowProp;
    flexShrink?: FlexShrinkProp;
    order?: OrderProp;
}
export declare const defaultFlexChildProps: FlexChildProps;
export declare const FlexChildClassKey: string;
export type FlexChildClasses = 'root' | 'alignSelfAuto' | 'alignSelfBaseline' | 'alignSelfCenter' | 'alignSelfFlexEnd' | 'alignSelfFlexStart' | 'alignSelfStretch';
export declare function FlexChildStyles(theme: Theme): Styles;
export declare const FlexChildStyle: Styles;
export declare const composeFlexChildClasses: (userProps?: FlexChildProps) => string;
export declare function FlexChild(props: FlexChildProps): import("react/jsx-runtime").JSX.Element;
export {};
