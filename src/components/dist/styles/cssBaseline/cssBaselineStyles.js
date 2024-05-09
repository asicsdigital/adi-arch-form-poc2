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
import { withTheme } from '../withTheme/index';
var theme = withTheme();
export var cssBaselineStyles = {
    '@global': {
        html: {
            boxSizing: 'border-box',
            height: '100%',
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            WebkitTextSizeAdjust: '100%'
        },
        '*, *::before, *::after': {
            boxSizing: 'inherit'
        },
        'strong, b': {
            fontWeight: theme.typography.fontWeightBold
        },
        body: __assign(__assign({}, theme.typography.variants.body1), { backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, height: '100%', scrollBehavior: 'smooth', textRendering: 'optimizeSpeed', '@media print': {
                backgroundColor: theme.palette.common.white
            }, '&::backdrop': {
                backgroundColor: theme.palette.background.default
            } }),
        'input, button, textarea, select': {
            font: 'inherit'
        }
    }
};
