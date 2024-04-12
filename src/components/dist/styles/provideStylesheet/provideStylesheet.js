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
import { createStylesheet } from '../createStylesheet/index';
import { addSheet, store } from '../../store/index';
import { fromCamelToKebab } from '../../helpers/fromCamelToKebab/index';
var styleSheetFactoryOptions = {
    index: 5,
    meta: 'OG Styles'
};
export function provideStylesheet(styles, options) {
    var _a;
    if (options === void 0) { options = {}; }
    options.generateId = options.meta ? function (rule, sheet) { return "".concat(options.meta, "-").concat(fromCamelToKebab(rule.key)); } : undefined;
    options = __assign(__assign({}, styleSheetFactoryOptions), options);
    var key = options.meta === styleSheetFactoryOptions.meta ? JSON.stringify(styles) : options.meta;
    var sheet = key ? store.getState().sheets[key] : key;
    var stylesheet = sheet ? sheet : createStylesheet(styles, options).attach();
    if (key) {
        store.dispatch(addSheet((_a = {}, _a[key] = stylesheet, _a)));
    }
    return stylesheet;
}
