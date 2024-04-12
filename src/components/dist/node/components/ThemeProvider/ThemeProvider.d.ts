import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { ThemeOptions } from '../../types';
export interface ThemeProviderProps extends Partial<MuiThemeProviderProps> {
    themeOptions?: ThemeOptions;
}
export declare function ThemeProvider({ children, themeOptions }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
