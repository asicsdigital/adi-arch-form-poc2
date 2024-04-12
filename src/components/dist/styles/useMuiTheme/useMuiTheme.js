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
import { provideTheme } from '../provideTheme/index';
import { useTheme } from '../useTheme/index';
import { useStyleOverrides } from '../useStyleOverrides/index';
export function useMuiTheme() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    provideTheme();
    var dsprotoTheme = useTheme();
    var styleOverrides = useStyleOverrides();
    var muiStyleOverrides = {};
    var keys = Object.keys(styleOverrides);
    keys.forEach(function (key) { return (muiStyleOverrides["Mui".concat(key)] = styleOverrides[key]); });
    var muiTheme = {
        breakpoints: {
            values: (_a = dsprotoTheme.breakpoints) === null || _a === void 0 ? void 0 : _a.values
        },
        components: muiStyleOverrides,
        direction: dsprotoTheme.direction,
        palette: dsprotoTheme.palette,
        shadows: dsprotoTheme.shadows,
        shape: dsprotoTheme.shape,
        spacing: (_b = dsprotoTheme.spacing) === null || _b === void 0 ? void 0 : _b.unit,
        transitions: {
            duration: (_c = dsprotoTheme.transitions) === null || _c === void 0 ? void 0 : _c.duration,
            easing: (_d = dsprotoTheme.transitions) === null || _d === void 0 ? void 0 : _d.easing
        },
        typography: __assign(__assign({}, (_e = dsprotoTheme.typography) === null || _e === void 0 ? void 0 : _e.variants), { htmlFontSize: (_f = dsprotoTheme.typography) === null || _f === void 0 ? void 0 : _f.htmlFontSize, fontFamily: (_g = dsprotoTheme.typography) === null || _g === void 0 ? void 0 : _g.fontFamily, fontSize: (_h = dsprotoTheme.typography) === null || _h === void 0 ? void 0 : _h.fontSize })
    };
    return muiTheme;
}
