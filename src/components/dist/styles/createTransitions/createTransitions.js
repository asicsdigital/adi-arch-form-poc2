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
var defaultTransitionsOptions = {
    duration: {},
    easing: {}
};
export function createTransitions(userTransitions) {
    if (userTransitions === void 0) { userTransitions = {}; }
    var transitions = defaultTheme.transitions;
    var transitionsOptions = __assign(__assign({}, defaultTransitionsOptions), userTransitions);
    transitions.duration = __assign(__assign({}, transitions.duration), transitionsOptions.duration);
    transitions.easing = __assign(__assign({}, transitions.easing), transitionsOptions.easing);
    return transitions;
}
