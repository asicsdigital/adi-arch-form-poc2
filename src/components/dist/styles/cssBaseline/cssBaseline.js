import { merge } from 'lodash';
import { cssBaselineStyles } from './cssBaselineStyles';
import { provideStylesheet } from '../provideStylesheet/index';
var styleSheetFactoryOptions = {
    index: 1,
    meta: 'CSS baseline'
};
export function cssBaseline(userStyles, userStyleSheetFactoryOptions) {
    if (userStyles === void 0) { userStyles = {}; }
    if (userStyleSheetFactoryOptions === void 0) { userStyleSheetFactoryOptions = {}; }
    var styles = merge(cssBaselineStyles, userStyles);
    var options = merge(styleSheetFactoryOptions, userStyleSheetFactoryOptions);
    return provideStylesheet(styles, options);
}
