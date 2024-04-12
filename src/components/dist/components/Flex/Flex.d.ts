import { CSSProperties, GroundProps, Styles, Theme } from '../../types/index';
type AlignContentProp = CSSProperties['alignContent'];
type AlignItemsProp = CSSProperties['alignItems'];
type FlexDirectionProp = CSSProperties['flexDirection'];
type FlexWrapProp = CSSProperties['flexWrap'];
type GapProp = CSSProperties['gap'];
type JustifyContentProp = CSSProperties['justifyContent'];
export interface FlexProps extends GroundProps {
    alignContent?: AlignContentProp;
    alignItems?: AlignItemsProp;
    flexDirection?: FlexDirectionProp;
    flexWrap?: FlexWrapProp;
    gap?: GapProp;
    justifyContent?: JustifyContentProp;
}
export declare const defaultFlexProps: FlexProps;
export declare const FlexClassKey: string;
export type FlexClasses = 'root' | 'alignContentCenter' | 'alignContentFlexEnd' | 'alginContentFlexStart' | 'alignContentSpaceAround' | 'alignContentSpaceBetween' | 'alignContentStretch' | 'alignItemsBaseline' | 'alignItemsCenter' | 'alignItemsFlexEnd' | 'alignItemsFlexStart' | 'alignItemsStretch' | 'flexDirectionColumn' | 'flexDirectionColumnReverse' | 'flexDirectionRow' | 'flexDirectionRowReverse' | 'flexWrapNoWrap' | 'flexWrapWrap' | 'flexWrapWrapReverse' | 'justifyContentCenter' | 'justifyContentFlexEnd' | 'justifyContentFlexStart' | 'justifyContentSpaceAround' | 'justifyContentSpaceBetween' | 'justifyContentSpaceEvenly';
export declare function FlexStyles(theme: Theme): Styles;
export declare const FlexStyle: Styles;
export declare const composeFlexClasses: (userProps?: FlexProps) => string;
export declare function Flex(props: FlexProps): import("react/jsx-runtime").JSX.Element;
export {};
