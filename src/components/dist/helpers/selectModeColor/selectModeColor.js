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
import { lighten } from '../lighten/index';
import { darken } from '../darken/index';
export function selectModeColor(color, type, options) {
    if (type === void 0) { type = 'light'; }
    if (options === void 0) { options = {}; }
    var defaultOptions = { darkenBy: 0.5, lightenBy: 0.62 };
    var modeColorOptions = __assign(__assign({}, defaultOptions), options);
    var darkenBy = modeColorOptions.darkenBy, lightenBy = modeColorOptions.lightenBy;
    return type === 'light' ? lighten(color, lightenBy) : darken(color, darkenBy);
}
