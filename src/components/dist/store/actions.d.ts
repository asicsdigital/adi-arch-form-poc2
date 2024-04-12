import { ActionTypes, RenderedCSS, Sheet, StyleSheet, Svg, Theme } from '../types/index';
export declare function addSvg(svg: Svg): ActionTypes;
export declare function addSheet(sheet: Sheet<string, StyleSheet>): ActionTypes;
export declare function setTheme(theme: Theme): ActionTypes;
export declare function setTokens(tokens: string): ActionTypes;
export declare function updateCss(css: RenderedCSS): ActionTypes;
