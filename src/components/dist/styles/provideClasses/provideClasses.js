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
import { provideStylesheet } from '../provideStylesheet/index';
import { provideTheme } from '../provideTheme/index';
export function provideClasses(stylesOrCreator, options) {
    if (options === void 0) { options = {}; }
    var theme = withTheme();
    if (theme.initial) {
        provideTheme();
        theme = withTheme();
    }
    var styles = typeof stylesOrCreator === 'function' ? stylesOrCreator(theme) : stylesOrCreator;
    var sheet = provideStylesheet(styles, options);
    return __assign({}, sheet.classes);
}
