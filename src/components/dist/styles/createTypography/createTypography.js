import { merge } from 'lodash';
import { composedTypography } from './composedTypography';
import { defaultTheme } from '../defaultTheme/index';
export function createTypography(userTypographyOptions) {
    if (userTypographyOptions === void 0) { userTypographyOptions = { variants: {} }; }
    var typography = defaultTheme.typography;
    var mergedOptions = merge({}, composedTypography, userTypographyOptions);
    return merge({}, typography, mergedOptions);
}
