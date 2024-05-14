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
import { withTheme } from '../../styles/withTheme/index';
export function applyOverrides(styles, component) {
    var theme = withTheme();
    var overrides = __assign({}, theme.overrides);
    var override = overrides[component] || {};
    return merge(styles, override);
}
