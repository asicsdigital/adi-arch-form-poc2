import jss from 'jss';
import { defaultJssOptions } from '../defaultTheme/index';
export function createStylesheet(styles, options) {
    if (options === void 0) { options = {}; }
    jss.setup(defaultJssOptions);
    return jss.createStyleSheet(styles, options);
}
