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
import { defaultTheme } from '../defaultTheme/index';
var defaultBreakpointsOptions = {};
export function createBreakpoints(userBreakpoints) {
    if (userBreakpoints === void 0) { userBreakpoints = {}; }
    var breakpoints = defaultTheme.breakpoints;
    var breakpointsOptions = __assign(__assign({}, defaultBreakpointsOptions), userBreakpoints);
    breakpoints.values = __assign(__assign({}, breakpoints.values), breakpointsOptions.values);
    return breakpoints;
}
