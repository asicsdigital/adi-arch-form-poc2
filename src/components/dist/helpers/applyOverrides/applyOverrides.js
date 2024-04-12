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
import { useTheme } from '../../styles/useTheme/index';
export function applyOverrides(styles, component) {
    var theme = useTheme();
    var overrides = __assign({}, theme.overrides);
    var override = overrides[component] || {};
    return merge(styles, override);
}
