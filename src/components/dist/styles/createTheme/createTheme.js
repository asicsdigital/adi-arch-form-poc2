var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { merge } from 'lodash';
import { defaultTheme } from '../defaultTheme/index';
import { createBreakpoints } from '../createBreakpoints/index';
import { createPalette } from '../createPalette/index';
import { createShadows } from '../createShadows/index';
import { createTransitions } from '../createTransitions/index';
import { createTypography } from '../createTypography/index';
export function createTheme(userTheme) {
    if (userTheme === void 0) { userTheme = {}; }
    var breakpoints = createBreakpoints(userTheme.breakpoints);
    var components = {};
    var direction = userTheme.direction ? userTheme.direction : defaultTheme.direction;
    var initial = false;
    var media = merge(defaultTheme.media, userTheme.media || {});
    var overrides = merge(defaultTheme.overrides, userTheme.overrides || {});
    var palette = createPalette(userTheme.palette);
    var shadows = userTheme.shadows && userTheme.shadows.length > 1 ? userTheme.shadows : createShadows();
    var shape = userTheme.shape ? __assign({}, userTheme.shape) : __assign({}, defaultTheme.shape);
    var spacing = merge(defaultTheme.spacing, userTheme.spacing || {});
    var transitions = createTransitions(userTheme.transitions);
    var typography = createTypography(userTheme.typography);
    var zIndex = merge(defaultTheme.zIndex, userTheme.zIndex || {});
    return {
        breakpoints: breakpoints,
        components: components,
        direction: direction,
        initial: initial,
        media: media,
        overrides: overrides,
        palette: palette,
        shadows: shadows,
        shape: shape,
        spacing: spacing,
        transitions: transitions,
        typography: typography,
        zIndex: zIndex
    };
}
