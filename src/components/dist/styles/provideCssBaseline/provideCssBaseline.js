import { cssBaselineStyles } from '../cssBaseline/cssBaselineStyles';
import { provideStylesheet } from '../provideStylesheet/index';
import { provideTheme } from '../provideTheme/index';
import { useTheme } from '../useTheme/index';
import { store, updateCss } from '../../store/index';
export function provideCssBaseline() {
    var _a;
    var theme = useTheme();
    if (theme.initial) {
        provideTheme();
        theme = useTheme();
    }
    var key = 'baseline';
    var stateCss = store.getState().css[key] || '';
    var css;
    if (stateCss) {
        css = stateCss;
    }
    else {
        var sheet = provideStylesheet(cssBaselineStyles, { meta: key });
        css = sheet.toString({ allowEmpty: true });
    }
    store.dispatch(updateCss((_a = {}, _a[key] = css, _a)));
    return css;
}
