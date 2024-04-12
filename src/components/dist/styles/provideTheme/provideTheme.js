import { createTheme } from '../createTheme/index';
import { store, setTheme } from '../../store/index';
export function provideTheme(themeOptions) {
    if (themeOptions === void 0) { themeOptions = {}; }
    var theme = createTheme(themeOptions);
    store.dispatch(setTheme(theme));
}
