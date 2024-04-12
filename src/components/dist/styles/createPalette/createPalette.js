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
import { defaultTheme } from '../defaultTheme/index';
import { useTokens } from '../useTokens/index';
export function createPalette(userPalette) {
    if (userPalette === void 0) { userPalette = {}; }
    var blocksDefault = useTokens();
    var defaultPalette = {
        background: {
            default: blocksDefault.Background50 || defaultTheme.palette.background.default,
            paper: blocksDefault.BackgroundWhite || defaultTheme.palette.background.paper
        },
        divider: blocksDefault.Divider || defaultTheme.palette.divider,
        error: {
            dark: blocksDefault.ErrorDark || defaultTheme.palette.error.dark,
            light: blocksDefault.ErrorLight || defaultTheme.palette.error.light,
            main: blocksDefault.ErrorMain || defaultTheme.palette.error.main
        },
        grey: {
            '50': blocksDefault.Grey50 || defaultTheme.palette.grey['50'],
            '100': blocksDefault.Grey100 || defaultTheme.palette.grey['100'],
            '200': blocksDefault.Grey200 || defaultTheme.palette.grey['200'],
            '300': blocksDefault.Grey300 || defaultTheme.palette.grey['300'],
            '400': blocksDefault.Grey400 || defaultTheme.palette.grey['400'],
            '500': blocksDefault.Grey500 || defaultTheme.palette.grey['500'],
            '600': blocksDefault.Grey600 || defaultTheme.palette.grey['600'],
            '700': blocksDefault.Grey700 || defaultTheme.palette.grey['700'],
            '800': blocksDefault.Grey800 || defaultTheme.palette.grey['800'],
            '900': blocksDefault.Grey900 || defaultTheme.palette.grey['900']
        },
        info: {
            dark: blocksDefault.InfoDark || defaultTheme.palette.info.dark,
            light: blocksDefault.InfoLight || defaultTheme.palette.info.light,
            main: blocksDefault.InfoMain || defaultTheme.palette.info.main
        },
        primary: {
            dark: blocksDefault.PrimaryDark || defaultTheme.palette.primary.dark,
            light: blocksDefault.PrimaryLight || defaultTheme.palette.primary.light,
            main: blocksDefault.PrimaryMain || defaultTheme.palette.primary.main
        },
        secondary: {
            dark: blocksDefault.SecondaryDark || defaultTheme.palette.secondary.dark,
            light: blocksDefault.SecondaryLight || defaultTheme.palette.secondary.light,
            main: blocksDefault.SecondaryMain || defaultTheme.palette.secondary.main
        },
        success: {
            dark: blocksDefault.SuccessDark || defaultTheme.palette.success.dark,
            light: blocksDefault.SuccessLight || defaultTheme.palette.success.light,
            main: blocksDefault.SuccessMain || defaultTheme.palette.success.main
        },
        text: {
            disabled: blocksDefault.TextDisabled || defaultTheme.palette.text.disabled,
            primary: blocksDefault.TextPrimary || defaultTheme.palette.text.primary,
            secondary: blocksDefault.TextSecondary || defaultTheme.palette.text.secondary
        },
        warning: {
            dark: blocksDefault.WarningDark || defaultTheme.palette.warning.dark,
            light: blocksDefault.WarningLight || defaultTheme.palette.warning.light,
            main: blocksDefault.WarningMain || defaultTheme.palette.warning.main
        }
    };
    var palette = defaultTheme.palette;
    var defaultPaletteOptions = {
        action: {},
        background: {},
        common: {},
        error: {},
        grey: {},
        info: {},
        primary: {},
        secondary: {},
        success: {},
        text: {},
        warning: {}
    };
    var paletteOptions = __assign(__assign({}, defaultPaletteOptions), userPalette);
    var mode = paletteOptions.mode || palette.mode;
    palette.action = __assign(__assign({}, palette.action), paletteOptions.action);
    palette.background = __assign(__assign(__assign({}, palette.background), defaultPalette.background), paletteOptions.background);
    palette.common = __assign(__assign({}, palette.common), paletteOptions.common);
    palette.contrastThreshold = paletteOptions.contrastThreshold || palette.contrastThreshold;
    palette.divider = paletteOptions.divider || defaultPalette.divider || defaultTheme.palette.divider;
    palette.error = __assign(__assign(__assign({}, palette.error), defaultPalette.error), paletteOptions.error);
    palette.grey = __assign(__assign(__assign({}, palette.grey), defaultPalette.grey), paletteOptions.grey);
    palette.info = __assign(__assign(__assign({}, palette.info), defaultPalette.info), paletteOptions.info);
    palette.mode = mode;
    palette.primary = __assign(__assign(__assign({}, palette.primary), defaultPalette.primary), paletteOptions.primary);
    palette.secondary = __assign(__assign(__assign({}, palette.secondary), defaultPalette.secondary), paletteOptions.secondary);
    palette.success = __assign(__assign(__assign({}, palette.success), defaultPalette.success), paletteOptions.success);
    palette.text = __assign(__assign(__assign({}, palette.text), defaultPalette.text), paletteOptions.text);
    palette.tonalOffset = paletteOptions.tonalOffset || palette.tonalOffset;
    palette.warning = __assign(__assign(__assign({}, palette.warning), defaultPalette.warning), paletteOptions.warning);
    return palette;
}
