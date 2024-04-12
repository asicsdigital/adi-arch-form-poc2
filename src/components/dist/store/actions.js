import { ADD_SHEET, ADD_SVG, SET_THEME, SET_TOKENS, UPDATE_CSS } from '../types/index';
export function addSvg(svg) {
    return { type: ADD_SVG, svg: svg };
}
export function addSheet(sheet) {
    return { type: ADD_SHEET, sheet: sheet };
}
export function setTheme(theme) {
    return { type: SET_THEME, theme: theme };
}
export function setTokens(tokens) {
    return { type: SET_TOKENS, tokens: tokens };
}
export function updateCss(css) {
    return { type: UPDATE_CSS, css: css };
}
