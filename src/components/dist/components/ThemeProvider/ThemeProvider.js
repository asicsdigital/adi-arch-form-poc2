'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createTheme as muiCreateTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { provideTheme, useMuiTheme } from '../../styles';
export function ThemeProvider(_a) {
    var children = _a.children, themeOptions = _a.themeOptions;
    provideTheme(themeOptions);
    var coreMuiTheme = useMuiTheme();
    var theme = muiCreateTheme(coreMuiTheme);
    return _jsx(MuiThemeProvider, { theme: theme, children: children });
}
